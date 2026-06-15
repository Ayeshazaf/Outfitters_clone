import CTA from "../components/cta";
import FocusSection from "../components/FocusSection";
import Hero from "../components/Hero";
import SubCategories from "../components/subcategory";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img2 from "../assets/women/Img2.jpg";
import Img3 from "../assets/women/Img3.jpg";
import Img4 from "../assets/women/Img4.jpg";
import Img5 from "../assets/women/Img5.jpg";
import Img6 from "../assets/women/Img6.jpg";

function ShopRail({ category, fallback = [] }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch(`http://localhost:5000/api/products`)
      .then((response) => response.json())
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          setItems(data);
          return;
        }
        if (!cancelled) {
          setItems([]);
        }
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [category]);

  const display = items.length > 0 ? items : fallback;

  return (
    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
      {(loading ? fallback : display).map((product, idx) => (
        <Link
          key={`${product.id ?? product.name ?? 'item'}-${idx}`}
          to={`/collections/men-footwear/products/${product.id}`}
          className="min-w-[250px] max-w-[250px] flex-shrink-0"
        >
          <div className="overflow-hidden bg-[#e9ecef]">
            <img src={product.image} alt={product.name || product.title} className="h-[430px] w-full object-cover" />
          </div>
          <div className="pt-3 px-1">
            <h3 className="text-[13px] leading-snug uppercase tracking-wide text-black">
              {product.name || product.title}
            </h3>
            {product.fit ? <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-gray-600">{product.fit}</p> : null}
            {product.price ? <p className="mt-2 text-sm font-bold text-black">{product.price}</p> : null}
            {product.compareAt ? <p className="text-[11px] text-gray-500 line-through">{product.compareAt}</p> : null}
            {product.colors?.length ? (
              <div className="mt-2 flex gap-2">
                {product.colors.slice(0, 3).map((color, colorIndex) => (
                  <span key={`${color}-${colorIndex}`} className="h-3 w-3 border border-gray-300" style={{ backgroundColor: color }} />
                ))}
              </div>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  );
}


export default function Womenhome() {
  const womenImages = [Img2, Img3, Img4, Img5, Img6];

  const slides = [
    {
      image: Img2,
      title: "Summer Collection",
      desc: "Light. Elegant. Premium Wear.",
      btn: "Shop Now",
    },
    {
      image: Img3,
      title: "New Arrivals",
      desc: "Fresh Styles Just Dropped",
      btn: "Explore",
    },
    {
      image: Img4,
      title: "Winter Sale",
      desc: "Up to 50% Off",
      btn: "Shop Deals",
    },
    {
      image: Img5,
      title: "Denim Edit",
      desc: "New everyday staples",
      btn: "View Collection",
    },
    {
      image: Img6,
      title: "Style Refresh",
      desc: "Soft layers and clean cuts",
      btn: "Shop Looks",
    },
  ];
  const categories = [
    
    {
      id: 1,
      image: Img2,
      label: "T-SHIRTS",
    },
    {
      id: 2,
      image: Img3,
      label: "POLOS",
    },
    {
      id: 3,
      image: Img4,
      label: "SHIRTS",
    },
    {
      id: 4,
      image: Img5,
      label: "ACTIVEWEAR",
    },
    {
      id: 5,
      image: Img6,
      label: "DENIM",
    },
    {
      id: 6,
      image: Img2,
      label: "TROUSERS",
    },
    {
      id: 7,
      image: Img3,
      label: "SHORTS",
    },
    {
      id: 8,
      image: Img4,
      label: "SWEATSHIRTS & HOODIES",
    },
    {
      id: 9,
      image: Img5,
      label: "SWEATERS",
    },
    {
      id: 10,
      image: Img6,
      label: "OUTWEARS",
    },
  ];

   const products = [
    {
      id: 1,
      name: "Textured Shirt",
      fit: "RELAXED FIT | MEN",
      price: "PKR 4,990",
      image: Img2,
      colors: ["#d4b483", "#000000", "#ffffff"],
    },
    {
      id: 2,
      name: "Slogan Print T-Shirt",
      fit: "OVERSIZED FIT | MEN",
      price: "PKR 3,290",
      image: Img3,
      colors: ["#d4b483", "#000000", "#ffffff"],
    },
    {
      id: 3,
      name: "Cropped Slogan Print T-Shirt",
      fit: "BOXY FIT | MEN",
      price: "PKR 2,890",
      image: Img4,
      colors: ["#654321", "#cccccc"],
    },
    {
      id: 4,
      name: "Crew Neck T-Shirt",
      fit: "REGULAR FIT | MEN",
      price: "PKR 2,490",
      image: Img5,
      colors: ["#000000", "#ffffff", "#888888"],
    },
    {
      id: 5,
      name: "Crew Neck T-Shirt",
      fit: "REGULAR FIT | MEN",
      price: "PKR 2,490",
      image: Img6,
      colors: ["#000000", "#ffffff", "#888888"],
    },
    {
      id: 6,
      name: "Crew Neck T-Shirt",
      fit: "REGULAR FIT | MEN",
      price: "PKR 2,490",
      image: womenImages[0],
      colors: ["#000000", "#ffffff", "#888888"],
    },
    {
      id: 7,
      name: "Crew Neck T-Shirt",
      fit: "REGULAR FIT | MEN",
      price: "PKR 2,490",
      image: womenImages[1],
      colors: ["#000000", "#ffffff", "#888888"],
    },
  ];

    const shopTabs = [
      { label: "T-SHIRTS", category: "tshirts" },
      { label: "DENIM", category: "denim" },
      { label: "FOOTWEAR", category: "footwear" },
      { label: "TROUSERS", category: "trousers" },
      { label: "FRAGRANCES", category: "fragrances" },
    ];
    const [activeShopTab, setActiveShopTab] = useState("footwear");

  
  return (
    <>
      <Hero slides={slides} />

      <div className="h-130">
        <SubCategories categories={categories} />
      </div>

      <FocusSection
        image={Img6}
        imageAlt="Women focus section"
        title="CATEGORIES IN FOCUS"
        focusItems={[
          { label: "TEES & POLOS", href: "#" },
          { label: "SHORTS", href: "#" },
          { label: "SHIRTS", href: "#" },
        ]}
        products={products}
      />

    <section className="bg-white">
      <div className="max-w-4xl px-19 pb-16">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-black mb-6 ml-20">DENIM</h2>

        {/* Description */}
        <p className="text-lg font-regular text-black leading-relaxed mb-8 ml-20">
          WHEN WE THINK ABOUT DENIM, WE THINK ABOUT CRAFT — THE FABRIC, THE
          SILHOUETTE, THE WASH. IT’S A FASHION STAPLE, A CLASSIC PIECE THAT
          GROWS BETTER WITH WEAR, BECOMING MORE PERSONAL OVER TIME. WE KNOW WHAT
          MAKES DENIM, DENIM — SO WE CRAFT IT WITH CARE RIGHT HERE IN PAKISTAN.
          EACH WASH AND EVERY CUT CARRIES A STORY OF TEXTURE, MOVEMENT, AND EASE
          — BUILT FOR COMFORT, CONFIDENCE, AND EFFORTLESS STYLE.
        </p>

        {/* Link */}
        <a
          href="#"
          className="text-xl font-bold inline-flex items-center text-black font-medium ml-20"
        >
          VIEW ALL →
        </a>
      </div>
      <div className="flex flex-col h-260 px-5 gap-2">
          {/* <div className="w-full ">
          <img
              src={Img6}
              alt="Community look 1"
              className="h-150 object-cover border rounded"
            />
        </div> */}
        <div className="flex gap-2">
          <img
              src={Img2}
              alt="Community look 1"
              className="flex-1 h-100 object-cover border rounded"
            />
            <img
              src={Img3}
              alt="Community look 1"
              className="flex-1 h-100 object-cover border rounded"
            />
            <img
              src={Img4}
              alt="Community look 1"
              className="flex-1 h-100 object-cover border rounded"
            />
            <img
              src={Img5}
              alt="Community look 1"
              className="flex-1 h-100 object-cover border rounded"
            />
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="max-w-4xl  px-19 py-16">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-black mb-6 px-4">SHOP THE STYLE</h2>

        {/* Description */}
        <p className="text-lg font-regular uppercase text-black leading-relaxed mb-8 px-4">
          Looks that speak your style. Easy layers, clean cuts, effortless edge
        </p>

        {/* Link */}
        <a
          href="#"
          className="text-xl font-bold inline-flex items-center text-black font-medium px-4"
        >
          VIEW ALL →
        </a>
      </div>
      {/* Product Grid */}
        {/* <div className="flex h-120 p-5 gap-3 w-full overflow-x-auto hide-scrollbar">
          {products.map((product) => (
            <div key={product.id} className=" flex-col space-y-3">
              <img
                src={product.image}
                alt={product.name}
                className="border min-w-70 h-100 object-cover rounded"
              />
            </div>
          ))}
        </div> */}
    </section>

    <section className="bg-white px-4 sm:px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-black/10 pb-3 text-[15px] font-medium uppercase tracking-wide text-black">
          {shopTabs.map((tab) => (
            <button
              key={tab.category}
              type="button"
              onClick={() => setActiveShopTab(tab.category)}
              className={`pb-2 transition-colors ${
                activeShopTab === tab.category
                  ? "border-b-2 border-black text-black"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <ShopRail
            category={activeShopTab}
            fallback={activeShopTab === "footwear" ? products : products}
          />
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="max-w-4xl  px-19 py-16">
        {/* Heading */}
        <Link to="/collections/men-footwear" className="inline-block">
          <h2 className="text-3xl font-bold text-black ml-20 py-4">FOOTWEAR</h2>
        </Link>

        {/* Description */}
        <p className="text-lg font-regular uppercase text-black leading-relaxed ml-20">
          Grab our footwear collection and elevate your trendy, stylish look effortlessly.
        </p>

        {/* Link */}
        <a
          href="#"
          className="text-xl font-bold inline-flex items-center text-black font-medium ml-20"
        >
          VIEW ALL →
        </a>
      </div>
      {/* <div className="px-5">
        <img
                src={Img6}
                alt="img"
                className="border w-full h-100 object-cover rounded"
              />
      </div> */}
      {/* Product Grid - footwear pulled from backend if available */}
      <ShopRail category="footwear" fallback={products} />
    </section>

    <section className="bg-white">
      <div className="max-w-4xl  px-19 py-16">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-black mb-6 ml-20">NEW & TRENDING</h2>

        {/* Description */}
        <p className="text-lg font-regular uppercase text-black leading-relaxed mb-8 ml-20">
          JUST LAUNCHED PIECES INSPIRED BY WHAT’S HOT NOW, CRAFTED FOR THOSE WHO LOVE STAYING AHEAD OF THE STYLE CURVE
        </p>

        {/* Link */}
        <a
          href="#"
          className="text-xl font-bold inline-flex items-center text-black font-medium ml-20"
        >
          VIEW ALL →
        </a>
      </div>
      {/* Product Grid */}
        <div className="flex h-150 p-5 gap-3 w-full overflow-x-auto hide-scrollbar">
          {products.map((product) => (
            <div key={product.id} className=" flex-col space-y-3">
              <img
                src={product.image}
                alt={product.name}
                className="border w-70 h-100 object-cover rounded"
              />
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-xs text-gray-600">{product.fit}</p>
              <p className="text-sm font-bold">{product.price}</p>

              {/* Color options */}
              {product.colors && (
                <div className="flex space-x-2">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 border"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
    </section>

      <div className="flex w-full h-150">
        <div className="flex-col flex-1 bg-linear-to-br from-blue-900 via-blue-700 to-purple-700 flex items-center justify-center">
          <h1 className="text-5xl">LAST CHANCE</h1>
          <h3 className="text-white text-2xl">300 new style up to 50% off*</h3>
        </div>
      </div>

      <section className="bg-white px-1 py-16 h-lvh">
      <div className="w-full ">
        {/* Heading */}
        <div className=" flex text-center items-center justify-center  mb-10">
          <div>
            <h2 className="text-4xl font-bold text-black">COMMUNITY</h2>
            <p className="text-gray-700 text-2xl mt-2">
              EXPLORE HOW OUR COMMUNITY STYLES IT
            </p>
            <a
            href="#"
            className="mt-4 md:mt-0 text-1xl text-black hover:underline"
          >
            INSTAGRAM →
          </a>
          </div>
        </div>        

        <div className="flex gap-2 min-w-[1500px] overflow-x-auto hide-scrollbar">
          {/* card */}
          <div className="h-100 min-w-70 border space-y-3">
            <img
              src={Img2}
              alt="Community look 1"
              className="w-full h-80 object-cover rounded"
            />
            {/* Mini previews */}
            <div className="flex space-x-2 justify-center">
              <img
                src={Img3}
                alt="Preview 1"
                className="w-10 h-10 rounded-full object-cover border"
              />
              <img
                src={Img4}
                alt="Preview 2"
                className="w-10 h-10 rounded-full object-cover border"
              />
            </div>
          </div>

          

          {/* Repeat for other cards */}
          <div className="h-100 min-w-85 border space-y-3">
            <img
              src={Img5}
              alt="Community look 2"
              className="w-full h-80 object-cover rounded"
            />
            <div className="flex space-x-2 justify-center">
              <img src={Img6} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
              <img src={Img2} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
            </div>
          </div>

          <div className="h-100 min-w-85 border space-y-3">
            <img
              src={Img4}
              alt="Community look 2"
              className="w-full h-80 object-cover rounded"
            />
            <div className="flex space-x-2 justify-center">
              <img src={Img5} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
              <img src={Img2} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
            </div>
          </div>

          <div className="h-100 min-w-85 border space-y-3">
            <img
              src={Img3}
              alt="Community look 2"
              className="w-full h-80 object-cover rounded"
            />
            <div className="flex space-x-2 justify-center">
              <img src={Img4} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
              <img src={Img5} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
            </div>
          </div>

          <div className="h-100 min-w-85 border space-y-3">
            <img
              src={Img6}
              alt="Community look 2"
              className="w-full h-80 object-cover rounded"
            />
            <div className="flex space-x-2 justify-center">
              <img src={Img2} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
              <img src={Img3} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
            </div>
          </div>


          <div className="h-100 min-w-85 border space-y-3">
            <img
              src={Img2}
              alt="Community look 3"
              className="w-full h-80 object-cover rounded"
            />
            <div className="flex space-x-2 justify-center">
              <img src={Img2} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
              <img src={Img3} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
            </div>
          </div>

          <div className="h-100 min-w-85 border space-y-3">
            <img
              src={Img4}
              alt="Community look 4"
              className="w-full h-80 object-cover rounded"
            />
            <div className="flex space-x-2 justify-center">
              <img src={Img5} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
              <img src={Img6} alt="Preview" className="w-10 h-10 rounded-full border object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

      <div className="flex w-full h-150">
        <div className="flex-1 bg-linear-to-br from-blue-900 via-blue-700 to-purple-700 flex items-center justify-center">
          {/* <img
        className="w-full max-h-165 object-cover"
        src={product.image}
        alt={product.name}
      /> */}
          <span className="text-white text-4xl font-black tracking-widest">
            WOMEN
          </span>
        </div>
        {/* Jewelry Image */}
        <div className="flex-1 bg-linear-to-br from-blue-900 via-blue-700 to-purple-700 flex items-center justify-center">
          {/* <img
        className="w-full max-h-165 object-cover"
        src={product.image}
        alt={product.name}
      /> */}
          <span className="text-white text-4xl font-black tracking-widest">
            JUNIORS
          </span>
        </div>
      </div>

      <CTA />
    </>
  );
}
