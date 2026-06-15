import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SubCategories({ categories = [] }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full py-6 px-6">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar items-start">
        {categories.map((cat, idx) => (
          <CategoryItem
            key={cat.id ?? idx}
            cat={cat}
            isDim={hovered !== null && hovered !== (cat.id ?? idx)}
            onHover={() => setHovered(cat.id ?? idx)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>
    </section>
  );
}

function CategoryItem({ cat, isDim, onHover, onLeave }) {
  const id = cat.id ?? 0;
  return (
    <Link
      to={cat.path ?? '#'}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative block cursor-pointer no-underline transform transition-all duration-300 ${isDim ? 'opacity-40 scale-95' : 'opacity-100 hover:scale-105'}`}
      aria-label={cat.label}
    >
      <div className="w-[260px] h-[260px] border overflow-hidden bg-gray-100">
        <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-sm font-semibold tracking-widest text-white drop-shadow-md">{cat.label}</span>
        </div>
      </div>
    </Link>
  );
}
