// import { FaBars, FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
// import React from "react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import whitelogo from "../assets/whitelogo.png";
// import blacklogo from "../assets/blacklogo.png";

// export default function Navbar() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest(".navbar-container")) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const shouldBeWhite = isScrolled || isDropdownOpen;
//   const textColor = shouldBeWhite ? "text-black" : "text-white";
//   const hoverTextColor = shouldBeWhite
//     ? "hover:text-gray-700"
//     : "hover:text-gray-300";
//   const logo = shouldBeWhite ? blacklogo : whitelogo;

//   return (
//     <nav
//       className={`fixed w-full shadow px-6 py-3 z-50 transition-all duration-300 ${
//         shouldBeWhite ? "bg-white" : "bg-transparent"
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex items-center space-x-10 h-10 navbar-container">
//         {/* Left: Hamburger + Brand */}
//         <div className="flex items-center space-x-3">
//           <button
//             className={`text-xl transition-colors ${textColor} ${hoverTextColor}`}
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             <FaBars />
//           </button>
//           <img
//             src={logo}
//             className={`w-30 object-contain`}
//             alt="Edenrobe Logo"
//           />

//           {isDropdownOpen && (
//             <div
//               className={`absolute top-16 left-0 bg-white shadow-lg rounded-md w-[600px] z-50 p-6 max-h-[700px] overflow-y-auto ${
//                 shouldBeWhite ? "border border-gray-200" : ""
//               }`}
//             >
//               <div className="flex">
//                 {/* Left Column */}
//                 <div className="w-100 px-10 py-7">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-black hover:text-gray-400 text-sm"
//                   >
//                     New IN
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-black hover:text-gray-400 text-sm"
//                   >
//                     Artisanal Collection
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-black hover:text-gray-400 text-sm"
//                   >
//                     Summer Shirts Edit
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-black hover:text-gray-400 text-sm"
//                   >
//                     G.O.A.T Outfitters
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-black hover:text-gray-400 text-sm"
//                   >
//                     Summer Essentials
//                   </a>

//                   <h2 className="px-4 py-6 font-semibold">
//                     Shop by Categories
//                   </h2>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     View All
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     T-Shirts
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Polos
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Shirts
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Activewear
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Denim
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Trousers
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Shorts
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Jeans
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Footwear
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Fragrances
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Accessories
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Underwear
//                   </a>

//                   <h2 className="px-4 py-6 font-semibold">
//                     Shop by Collection
//                   </h2>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Essentials
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Artisanal
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                   >
//                     Otr Lab
//                   </a>
//                 </div>

//                 {/* Right Column */}
//                 <div className="w-1/3 bg-gray-100">
//                   <h1 className="text-gray-700 text-xl font-bold p-4">
//                     Promo / Image
//                   </h1>
//                 </div>
//               </div>

//               {/* Bottom Links */}
//               <div className="border-t px-6 py-4">
//                 <a
//                   href="#"
//                   className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                 >
//                   HELP
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                 >
//                   CONTACT US
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                 >
//                   TRACK YOUR ORDER
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-1 text-black hover:text-gray-400 text-sm"
//                 >
//                   SCAN BAR CODE
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="flex-1 flex items-center justify-between">
//           {/* Middle: Category Links */}
//           <div className="w-full flex space-x-10 px-20">
//             <a
//               className={`text-sm font-medium hover:underline transition-colors ${textColor} ${hoverTextColor}`}
//             >
//               MEN
//             </a>
//             <a
//               className={`text-sm font-medium hover:underline transition-colors ${textColor} ${hoverTextColor}`}
//             >
//               WOMEN
//             </a>
//             <a
//               className={`text-sm font-medium hover:underline transition-colors ${textColor} ${hoverTextColor}`}
//             >
//               JUNIOR
//             </a>
//           </div>
//           {/* Right: Icons */}
//           <div className="flex items-center space-x-9">
//             <button
//               className={`flex items-center transition-colors ${textColor} ${hoverTextColor}`}
//             >
//               <FaSearch className="mr-1" />
//               <span className="hidden sm:inline">Search</span>
//             </button>
//             <button
//               className={`transition-colors ${textColor} ${hoverTextColor}`}
//             >
//               <FaUser />
//             </button>
//             <button
//               className={`relative transition-colors ${textColor} ${hoverTextColor}`}
//             >
//               <FaShoppingBag />
//               {/* Badge for cart items */}
//               {/* <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">0</span> */}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import whitelogo from "../assets/whitelogo.png";
import blacklogo from "../assets/blacklogo.png";

// ─── Dropdown Data ────────────────────────────────────────────────────────────

const dropdownData = {
  men: {
    path: "/pages/menhome",
    featured: [
      { label: "New In", path: "/men/new-in" },
      { label: "Artisanal Collection", path: "/men/artisanal" },
      { label: "Summer Shirts Edit", path: "/men/summer-shirts" },
      { label: "G.O.A.T Outfitters", path: "/men/goat" },
      { label: "Summer Essentials", path: "/men/summer-essentials" },
    ],
    categories: [
      { label: "View All", path: "/men" },
      { label: "T-Shirts", path: "/men/t-shirts" },
      { label: "Polos", path: "/men/polos" },
      { label: "Shirts", path: "/men/shirts" },
      { label: "Activewear", path: "/men/activewear" },
      { label: "Denim", path: "/men/denim" },
      { label: "Trousers", path: "/men/trousers" },
      { label: "Shorts", path: "/men/shorts" },
      { label: "Jeans", path: "/men/jeans" },
      { label: "Footwear", path: "/men/footwear" },
      { label: "Fragrances", path: "/men/fragrances" },
      { label: "Accessories", path: "/men/accessories" },
      { label: "Underwear", path: "/men/underwear" },
    ],
    collections: [
      { label: "Essentials", path: "/men/collections/essentials" },
      { label: "Artisanal", path: "/men/collections/artisanal" },
      { label: "Otr Lab", path: "/men/collections/otr-lab" },
    ],
    promoLabel: "Men's Summer '25",
  },
  women: {
    path: "/pages/womenhome",
    featured: [
      { label: "New In", path: "/women/new-in" },
      { label: "Lawn Collection", path: "/women/lawn" },
      { label: "Bridal Edit", path: "/women/bridal" },
      { label: "Festive Formals", path: "/women/festive" },
      { label: "Everyday Comfort", path: "/women/comfort" },
    ],
    categories: [
      { label: "View All", path: "/women" },
      { label: "Kurtis", path: "/women/kurtis" },
      { label: "Suits (2-Piece)", path: "/women/suits-2pc" },
      { label: "Suits (3-Piece)", path: "/women/suits-3pc" },
      { label: "Shalwar Kameez", path: "/women/shalwar-kameez" },
      { label: "Dupattas", path: "/women/dupattas" },
      { label: "Dresses", path: "/women/dresses" },
      { label: "Tops", path: "/women/tops" },
      { label: "Trousers", path: "/women/trousers" },
      { label: "Abayas", path: "/women/abayas" },
      { label: "Handbags", path: "/women/handbags" },
      { label: "Footwear", path: "/women/footwear" },
      { label: "Accessories", path: "/women/accessories" },
    ],
    collections: [
      { label: "Luxury Pret", path: "/women/collections/luxury-pret" },
      { label: "Ready to Wear", path: "/women/collections/ready-to-wear" },
      { label: "Bridal", path: "/women/collections/bridal" },
    ],
    promoLabel: "Women's Lawn '25",
  },
  junior: {
    path: "/pages/juniorhome",
    featured: [
      { label: "New In", path: "/junior/new-in" },
      { label: "Back to School", path: "/junior/back-to-school" },
      { label: "Summer Fun", path: "/junior/summer" },
      { label: "Festive Wear", path: "/junior/festive" },
      { label: "Sportswear", path: "/junior/sportswear" },
    ],
    categories: [
      { label: "View All", path: "/junior" },
      { label: "Boys T-Shirts", path: "/junior/boys-tshirts" },
      { label: "Boys Shirts", path: "/junior/boys-shirts" },
      { label: "Boys Trousers", path: "/junior/boys-trousers" },
      { label: "Girls Kurtis", path: "/junior/girls-kurtis" },
      { label: "Girls Frocks", path: "/junior/girls-frocks" },
      { label: "Girls Suits", path: "/junior/girls-suits" },
      { label: "Infant & Toddler", path: "/junior/infant" },
      { label: "Footwear", path: "/junior/footwear" },
      { label: "Accessories", path: "/junior/accessories" },
    ],
    collections: [
      { label: "Mini Me", path: "/junior/collections/mini-me" },
      { label: "Back to School", path: "/junior/collections/school" },
      { label: "Festive", path: "/junior/collections/festive" },
    ],
    promoLabel: "Junior Summer '25",
  },
};

const bottomLinks = [
  { label: "HELP", path: "/help" },
  { label: "CONTACT US", path: "/contact" },
  { label: "TRACK YOUR ORDER", path: "/track-order" },
  { label: "SCAN BAR CODE", path: "/scan" },
];

const tabs = ["men", "women", "junior"];

function IconBars(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="16.65" y1="16.65" x2="21" y2="21" />
    </svg>
  );
}

function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

function IconBag(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 7h12l-1 13H7L6 7Z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

// ─── Big Dropdown (FaBars) ────────────────────────────────────────────────────

function BarsDropdown({ onClose }) {
  const [activeTab, setActiveTab] = useState("men");
  const navigate = useNavigate();
  const data = dropdownData[activeTab];

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      // Clicking the already-active tab closes dropdown and navigates
      onClose();
      navigate(dropdownData[tab].path);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="absolute top-16 left-0 bg-white shadow-2xl w-[620px] z-50 border border-gray-100 rounded-sm max-h-[700px] overflow-y-auto hide-scrollbar">

      {/* ── Tab Strip: MEN / WOMEN / JUNIOR ── */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 py-3 text-sm font-semibold uppercase tracking-widest transition-colors
              ${activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-400 hover:text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Tab Content ── */}
      <div className="flex">
        {/* Links Column */}
        <div className="flex-1 px-8 py-5">
          {data.featured.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="block py-1.5 text-sm font-medium text-black hover:text-gray-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-5 mb-2">
            Shop by Categories
          </p>
          <div className="gap-x-4">
            {data.categories.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="block py-1 text-sm text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-5 mb-2">
            Shop by Collection
          </p>
          {data.collections.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="block py-1 text-sm text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Promo Column */}
        <div className="w-44 bg-gray-100 flex flex-col items-center justify-center p-4 shrink-0">
          <div className="w-full h-32 bg-gray-300 rounded-sm mb-3" />
          <p className="text-xs font-semibold text-gray-700 text-center">{data.promoLabel}</p>
          <Link
            to={data.path}
            onClick={onClose}
            className="mt-2 text-xs underline text-gray-500 hover:text-black"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* ── Bottom Links ── */}
      <div className="border-t border-gray-200 px-8 py-4 flex flex-wrap gap-x-6 gap-y-1">
        {bottomLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className="text-xs text-gray-500 hover:text-black uppercase tracking-wide transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const close = () => setIsOpen(false);

  // Clicking MEN/WOMEN/JUNIOR in the navbar bar navigates directly (no dropdown)
  const handleCatClick = (path) => {
    close();
    navigate(path);
  };

  const shouldBeWhite = isScrolled || isOpen;
  const textColor = shouldBeWhite ? "text-black" : "text-white";
  const hoverColor = shouldBeWhite ? "hover:text-gray-500" : "hover:text-gray-300";
  const logo = shouldBeWhite ? blacklogo : whitelogo;

  return (
    <nav
      ref={navRef}
      className={`fixed w-full shadow px-6 py-3 z-50 transition-all duration-300 ${
        shouldBeWhite ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex items-center space-x-10 h-10 relative">

        {/* ── Left: FaBars + Logo ── */}
        <div className="flex items-center space-x-3 relative">
          <button
            className={`text-xl transition-colors ${textColor} ${hoverColor}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <IconClose className="h-5 w-5" /> : <IconBars className="h-5 w-5" />}
          </button>

          <Link to="/" onClick={close}>
            <img src={logo} className="w-30 object-contain" alt="Edenrobe Logo" />
          </Link>

          {/* Single dropdown — opened only by FaBars */}
          {isOpen && <BarsDropdown onClose={close} />}
        </div>

        {/* ── Middle + Right ── */}
        <div className="flex-1 flex items-center justify-between">

          {/* MEN / WOMEN / JUNIOR links → navigate directly */}
          <div className="flex space-x-10 px-20">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleCatClick(dropdownData[tab].path)}
                className={`text-sm font-medium hover:underline transition-colors uppercase ${textColor} ${hoverColor}`}
              >
                {tab}
              </button>
            ))}
            <Link to="/admin" className={`text-sm font-medium hover:underline transition-colors uppercase ${textColor} ${hoverColor}`}>ADMIN</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-9">
            <button className={`flex items-center transition-colors ${textColor} ${hoverColor}`}>
              <IconSearch className="mr-1 h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </button>
            <button className={`transition-colors ${textColor} ${hoverColor}`}>
              <IconUser className="h-4 w-4" />
            </button>
            <button className={`relative transition-colors ${textColor} ${hoverColor}`}>
              <IconBag className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}