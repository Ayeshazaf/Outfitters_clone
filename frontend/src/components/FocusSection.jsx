function ProductRail({ items }) {
  return (
    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
      {items.map((item, index) => (
        <article key={`${item.name || item.title || 'item'}-${index}`} className="min-w-[240px] max-w-[240px] flex-shrink-0">
          <div className="overflow-hidden rounded-sm bg-[#f6f6f6]">
            <img src={item.image} alt={item.name || item.title} className="h-[360px] w-full object-cover" />
          </div>
          <div className="px-2 pt-3">
            <h3 className="text-sm uppercase tracking-wide text-black leading-snug line-clamp-2">{item.name || item.title}</h3>
            {item.fit ? <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gray-600">{item.fit}</p> : null}
            {item.price ? <p className="mt-3 text-sm font-bold text-black">{item.price}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function FocusSection({ image, title, focusItems = [], products = [], imageAlt = title }) {
  return (
    <section className="bg-white px-4 sm:px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4 items-start">
        <div className="overflow-hidden bg-[#f4f4f4]">
          <img src={image} alt={imageAlt} className="h-[600px] w-full object-cover" />
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] uppercase font-semibold">
            {title}
          </h2>

          {focusItems.length ? (
            <div className="mt-6 space-y-1">
              {focusItems.map((item, index) => (
                <div key={`${item.label || item.title || 'focus'}-${index}`}>
                  {index === 0 ? (
                    <a href={item.href || '#'} className="inline-block text-[20px] sm:text-[18px] font-semibold uppercase underline underline-offset-4 ">
                      {item.label}
                    </a>
                  ) : (
                    <a href={item.href || '#'} className="block text-[20px] sm:text-[18px] uppercase text-black/70 hover:text-black">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-8">
            <ProductRail items={products} />
          </div>
        </div>
      </div>
    </section>
  );
}
