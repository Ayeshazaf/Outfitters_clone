const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Try to load products from the existing Django backend's products.json if present
let products = [];
try {
  const localPath = path.join(__dirname, 'products.json');
  let raw = null;
  if (fs.existsSync(localPath)) {
    raw = require(localPath);
    console.log('Loaded products from ./products.json');
  } else {
    const fallback = path.join(__dirname, '..', 'backend', 'products.json');
    if (fs.existsSync(fallback)) {
      raw = require(fallback);
      console.log('Loaded products from ../backend/products.json');
    } else {
      console.warn('No products.json found; starting with empty list');
    }
  }

  // Normalize different fixture formats into { id, ...fields }
  if (Array.isArray(raw)) {
    products = raw.map((item, i) => {
      if (item && item.fields) {
        // Django fixture style
        return { id: item.pk || i + 1, ...item.fields };
      }
      // already plain object
      if (item && (item.id || item._id)) {
        return { id: item.id || item._id, ...item };
      }
      return { id: i + 1, ...item };
    });
  } else if (raw && typeof raw === 'object') {
    // if file exported object with wrapper (like { value: [...] })
    const arr = raw.value || raw.products || [];
    products = Array.isArray(arr) ? arr.map((item, i) => ({ id: item.id || i + 1, ...(item.fields || item) })) : [];
  }
} catch (err) {
  console.warn('Could not load products.json — starting with empty list');
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/products', (req, res) => {
  const { category } = req.query;
  if (category) {
    const q = String(category).toLowerCase();
    const filtered = products.filter((p) => {
      const cat = p.category || p.categories || p.type || p.tags || p.fields?.category || p.category_name;
      if (!cat) return false;
      if (Array.isArray(cat)) return cat.map(c => String(c).toLowerCase()).includes(q);
      return String(cat).toLowerCase().includes(q);
    });
    return res.json(filtered);
  }
  res.json(products);
});

// Bulk import endpoint - accepts array of product objects and persists them
app.post('/api/import', (req, res) => {
  const items = Array.isArray(req.body) ? req.body : (req.body.products || []);
  if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ error: 'No products provided' });
  const maxId = products.reduce((m, p) => Math.max(m, parseInt(p.id) || 0), 0);
  let nextId = maxId + 1;
  const added = items.map(it => {
    const prod = { id: nextId++, ...(it.fields || it) };
    products.push(prod);
    return prod;
  });
  if (!saveProducts()) return res.status(500).json({ error: 'Failed to persist imported products' });
  res.status(201).json({ imported: added.length, products: added });
});

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id || p.id === String(id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// Helper to persist products to local products.json
function saveProducts() {
  const file = path.join(__dirname, 'products.json');
  try {
    fs.writeFileSync(file, JSON.stringify(products, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Failed to write products.json', err);
    return false;
  }
}

// Create
app.post('/api/products', (req, res) => {
  const data = req.body;
  const maxId = products.reduce((m, p) => Math.max(m, parseInt(p.id) || 0), 0);
  const newId = maxId + 1;
  const product = { id: newId, ...data };
  products.push(product);
  if (!saveProducts()) return res.status(500).json({ error: 'Failed to persist product' });
  res.status(201).json(product);
});

// Update
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = products.findIndex((p) => (parseInt(p.id) || 0) === id);
  if (idx === -1) return res.status(404).json({ error: 'Product not found' });
  products[idx] = { ...products[idx], ...req.body, id };
  if (!saveProducts()) return res.status(500).json({ error: 'Failed to persist product' });
  res.json(products[idx]);
});

// Delete
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = products.findIndex((p) => (parseInt(p.id) || 0) === id);
  if (idx === -1) return res.status(404).json({ error: 'Product not found' });
  const removed = products.splice(idx, 1)[0];
  if (!saveProducts()) return res.status(500).json({ error: 'Failed to persist product' });
  res.json({ deleted: removed });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`backend-node: listening on http://localhost:${PORT}`));
