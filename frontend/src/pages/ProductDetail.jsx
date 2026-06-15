import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

function formatPrice(value) {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value === "number") return `PKR ${value.toLocaleString("en-PK")}`;
  const text = String(value);
  return text.toLowerCase().includes("pkr") ? text : `PKR ${text}`;
}

function getColors(product) {
  if (Array.isArray(product.colors)) return product.colors;
  if (product.color) return [product.color];
  return ["#f2f0eb", "#111827"];
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let cancelled = false;

    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Product not found");
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setProduct(data);
      })
      .catch(() => {
        if (!cancelled) setProduct(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  const gallery = useMemo(() => {
    if (!product) return [];
    const images = [product.image, product.image2, product.image3, product.image4].filter(Boolean);
    return images.length > 1 ? images : [product.image, product.image].filter(Boolean);
  }, [product]);

  if (loading) {
    return (
      <main className="grid min-h-[70vh] place-items-center bg-white text-sm uppercase tracking-[0.2em] text-black/60">
        Loading product
      </main>
    );
  }

  if (!product) {
    return (
      <main className="grid min-h-[70vh] place-items-center bg-white px-4 text-center">
        <div>
          <h1 className="text-2xl font-semibold uppercase tracking-wide">Product not found</h1>
          <Link to="/collections/men-footwear" className="mt-5 inline-block text-sm underline">
            Back to Men Footwear
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white text-black mt-100">
      <div className="mx-auto mt-100 grid max-w-[1500px] grid-cols-1 gap-8 px-4 py-6 sm:px-8 lg:grid-cols-[1fr_470px]">
        <section className="space-y-6">
          <nav className="mb-5 mt-100 flex items-center gap-2 text-[11px] uppercase text-black/55">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/collections/men-footwear">Men Footwear</Link>
            <span>/</span>
            <span className="text-black">{product.name || product.title}</span>
          </nav>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {gallery.map((image, index) => (
              <div key={`${image}-${index}`} className="bg-[#f3f3f1]">
                <img
                  src={image}
                  alt={`${product.name || product.title} view ${index + 1}`}
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="border-b border-black/10 pb-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/55">Men Footwear</p>
            <h1 className="mt-3 text-2xl font-semibold uppercase leading-tight tracking-wide">
              {product.name || product.title}
            </h1>
            <p className="mt-4 text-lg font-semibold">{formatPrice(product.price)}</p>
          </div>

          <div className="space-y-7 py-7">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Color</h2>
                <span className="text-xs uppercase tracking-[0.16em] text-black/50">
                  {product.color || "Selected"}
                </span>
              </div>
              <div className="flex gap-3">
                {getColors(product).map((color, index) => (
                  <button
                    key={`${color}-${index}`}
                    type="button"
                    className="h-8 w-8 border border-black p-1"
                    aria-label={`Color ${index + 1}`}
                  >
                    <span className="block h-full w-full border border-black/10" style={{ backgroundColor: color }} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Size</h2>
                <button className="text-xs uppercase tracking-[0.16em] underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[40, 41, 42, 43, 44, 45].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(String(size))}
                    className={`border px-4 py-3 text-sm ${
                      selectedSize === String(size)
                        ? "border-black bg-black text-white"
                        : "border-black/20 bg-white text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]">Quantity</h2>
              <div className="inline-flex items-center border border-black/20">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="px-4 py-3 text-lg"
                >
                  -
                </button>
                <span className="min-w-12 px-4 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="px-4 py-3 text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-black/85"
            >
              Add To Basket
            </button>
          </div>

          <div className="space-y-5 border-t border-black/10 pt-6 text-sm leading-6 text-black/70">
            <p>{product.description || "A clean everyday footwear style designed for comfort and easy movement."}</p>
            <details className="border-t border-black/10 pt-4" open>
              <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.18em] text-black">
                Product Details
              </summary>
              <p className="mt-3">
                Regular fit footwear with cushioned feel, durable finish, and versatile styling.
              </p>
            </details>
            <details className="border-t border-black/10 pt-4">
              <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.18em] text-black">
                Delivery & Returns
              </summary>
              <p className="mt-3">Standard delivery applies. Returns are accepted according to store policy.</p>
            </details>
          </div>
        </aside>
      </div>
    </main>
  );
}
