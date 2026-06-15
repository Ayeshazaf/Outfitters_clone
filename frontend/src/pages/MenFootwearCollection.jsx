import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api/products";

function formatPrice(value) {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value === "number") return `PKR ${value.toLocaleString("en-PK")}`;
  const text = String(value);
  return text.toLowerCase().includes("pkr") ? text : `PKR ${text}`;
}

function getColors(product) {
  if (Array.isArray(product.colors)) return product.colors;
  if (product.color) return [product.color];
  return ["#f2f0eb", "#1f2937"];
}

export default function MenFootwearCollection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    let cancelled = false;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (!cancelled) setProducts(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!cancelled) setProducts([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const sortedProducts = useMemo(() => {
    const next = [...products];
    if (sort === "price-low") {
      next.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    }
    if (sort === "price-high") {
      next.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    }
    return next;
  }, [products, sort]);

  return (
    <main className="bg-white text-black mt-70">
      <section className="border-b border-black/10 px-4 py-5 sm:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-black/60">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Men</span>
            <span>/</span>
            <span className="text-black">Men Footwear</span>
          </nav>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-semibold uppercase tracking-wide md:text-5xl">
                Men Footwear
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-black/65">
                Sneakers, trainers, and everyday footwear built around clean lines, comfort,
                and easy styling.
              </p>
            </div>
            <div className="text-sm uppercase tracking-[0.16em] text-black/70">
              {loading ? "Loading products" : `${sortedProducts.length} Products`}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-4 py-6 sm:px-8 lg:grid-cols-[230px_1fr]">
        <aside className="hidden border-r border-black/10 pr-6 lg:block">
          <div className="sticky top-24 space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em]">Category</h2>
              <div className="mt-4 space-y-3 text-sm text-black/70">
                <button className="block text-left text-black">Sneakers</button>
                <button className="block text-left">Slip-ons</button>
                <button className="block text-left">Trainers</button>
              </div>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em]">Size</h2>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[40, 41, 42, 43, 44, 45].map((size) => (
                  <button key={size} className="border border-black/20 px-3 py-2 text-xs">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-col justify-between gap-4 border-b border-black/10 pb-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {["All", "New In", "Sneakers", "Best Sellers"].map((item) => (
                <button
                  key={item}
                  className="border border-black/20 px-4 py-2 text-xs uppercase tracking-[0.16em] hover:border-black"
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.16em]">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-black/20 bg-white px-3 py-2 text-xs outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price, low to high</option>
                <option value="price-high">Price, high to low</option>
              </select>
            </label>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-[3/4] bg-gray-100" />
                  <div className="mt-4 h-4 w-4/5 bg-gray-100" />
                  <div className="mt-2 h-4 w-1/3 bg-gray-100" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
              {sortedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/collections/men-footwear/products/${product.id}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-[#f3f3f1]">
                    <img
                      src={product.image}
                      alt={product.name || product.title}
                      className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-3 bottom-3 translate-y-3 bg-white px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                      Quick View
                    </div>
                  </div>
                  <div className="pt-4">
                    <h2 className="text-[13px] font-medium uppercase leading-5 tracking-wide">
                      {product.name || product.title}
                    </h2>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-black/55">
                      Men
                    </p>
                    <p className="mt-2 text-sm font-semibold">{formatPrice(product.price)}</p>
                    <div className="mt-3 flex gap-2">
                      {getColors(product).slice(0, 4).map((color, index) => (
                        <span
                          key={`${color}-${index}`}
                          className="h-3 w-3 border border-black/20"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
