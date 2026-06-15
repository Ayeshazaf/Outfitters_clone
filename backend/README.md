# backend-node

Minimal Node.js backend for the Outfitters clone.

Features:
- Express server
- CORS enabled
- Endpoints:
  - `GET /api/health` - health check
  - `GET /api/products` - list products (reads from `../backend/products.json` if present)
  - `GET /api/products/:id` - product detail

Quick start:

```bash
cd backend-node
npm install
npm run dev   # requires nodemon (dev) or use npm start
```

By default the server listens on port `5000`.

If you want the server to use an internal copy of `products.json`, copy the file from the Django backend:

```bash
cp ../backend/products.json ./products.json
```
