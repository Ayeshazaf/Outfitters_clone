 
import React, { useState, useEffect } from "react";
import img1 from "../assets/Hero1.webp";
import img2 from "../assets/Hero1.webp";
import img3 from "../assets/Hero1.webp";

export default function Hero({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full h-lvh overflow-x-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full h-lvh overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              current === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-110 z-0"
            }`}
          >
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* OVERLAY */}
            {/* <div className="absolute inset-0 bg-black/40"></div>
             
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%]">
              <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="mt-3 text-sm md:text-lg">{slide.desc}</p>
              <button className="mt-5 px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition">
                {slide.btn}
              </button>
            </div>  */}
          </div>
        ))}
        {/* DOTS */}
        <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition ${
                current === index ? "bg-white scale-125" : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
}
    