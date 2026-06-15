import { useEffect, useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", price: "", image: "", description: "" });
  const [editing, setEditing] = useState(null);

  const api = (path, opts = {}) => fetch(`http://localhost:5000/api${path}`, opts).then(res => res.json());

  const load = () => {
    setLoading(true);
    fetch("http://localhost:5000/api/products")
      .then((r) => r.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function startEdit(p) {
    setEditing(p.id);
    setForm({ name: p.name || "", price: p.price || "", image: p.image || "", description: p.description || "" });
  }

  function cancelEdit() {
    setEditing(null);
    setForm({ name: "", price: "", image: "", description: "" });
  }

  function submit() {
    if (editing) {
      fetch(`http://localhost:5000/api/products/${editing}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((r) => r.json())
        .then(() => { load(); cancelEdit(); });
    } else {
      fetch(`http://localhost:5000/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((r) => r.json())
        .then(() => { load(); setForm({ name: "", price: "", image: "", description: "" }); });
    }
  }

  function remove(id) {
    if (!confirm("Delete product?")) return;
    fetch(`http://localhost:5000/api/products/${id}`, { method: "DELETE" })
      .then((r) => r.json())
      .then(() => load());
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Admin — Products</h1>

      <section className="mb-6 p-4 border rounded bg-white">
        <h2 className="font-semibold mb-2">{editing ? "Edit Product" : "Create Product"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2" />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border p-2" />
          <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="border p-2 col-span-2" />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border p-2 col-span-2" />
        </div>
        <div className="mt-3 flex gap-2">
          <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">{editing ? "Save" : "Create"}</button>
          {editing && <button onClick={cancelEdit} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Products</h2>
        {loading ? <p>Loading...</p> : (
          <div className="space-y-3">
            {products.map(p => (
              <div key={p.id} className="p-3 border rounded bg-white flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="text-xs text-gray-600">{p.price}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(p)} className="px-3 py-1 bg-yellow-300 rounded">Edit</button>
                  <button onClick={() => remove(p.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
