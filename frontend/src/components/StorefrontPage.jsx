import CTA from "./cta";
import Hero from "./Hero";
import SubCategories from "./subcategory";

function SectionHeading({ title, text, actionLabel = "VIEW ALL", actionHref = "#" }) {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight">{title}</h2>
      {text ? <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">{text}</p> : null}
      <a href={actionHref} className="mt-6 inline-flex items-center text-black font-medium hover:underline">
        {actionLabel} →
      </a>
    </div>
  );
}

function ProductRail({ items }) {
  return (
    <div className="flex gap-4 overflow-x-auto hide-scrollbar px-6 pb-8">
      {items.map((item) => (
        <article key={item.name} className="min-w-56 flex flex-col space-y-3">
          <div className="relative">
            <img src={item.image} alt={item.name} className="w-56 h-72 object-cover rounded border" />
            {item.sale ? (
              <span className="absolute top-3 left-3 bg-black text-white text-[11px] tracking-wide px-2 py-1 rounded-full">
                SALE
              </span>
            ) : null}
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">{item.fit}</p>
            <h3 className="text-sm font-semibold mt-1">{item.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-bold">{item.price}</span>
              {item.compareAt ? <span className="text-xs text-gray-500 line-through">{item.compareAt}</span> : null}
            </div>
          </div>
          {item.colors?.length ? (
            <div className="flex gap-2">
              {item.colors.map((color) => (
                <span key={color} className="w-3 h-3 rounded-full border" style={{ backgroundColor: color }} />
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function ImageCardRow({ cards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
      {cards.map((card) => (
        <a key={card.title} href={card.href || "#"} className="group block overflow-hidden rounded-lg border bg-white">
          <img src={card.image} alt={card.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-gray-500">{card.kicker}</p>
            <h3 className="mt-2 text-xl font-semibold text-black">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">{card.text}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

function PromoSplit({ left, right }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-6">
      {[left, right].map((item) => (
        <a
          key={item.title}
          href={item.href || "#"}
          className="relative min-h-[280px] overflow-hidden rounded-lg border bg-black text-white"
        >
          <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-white/75">{item.kicker}</p>
            <h3 className="mt-2 text-3xl font-bold uppercase">{item.title}</h3>
            <p className="mt-2 max-w-md text-sm text-white/85">{item.text}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

function CommunityStrip({ title, text, cards }) {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">{title}</h2>
          <p className="mt-3 text-gray-700">{text}</p>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {cards.map((card) => (
            <article key={card.image} className="min-w-72 rounded-lg border overflow-hidden bg-white">
              <img src={card.image} alt={card.title} className="h-80 w-full object-cover" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500">{card.kicker}</p>
                <h3 className="mt-1 font-semibold text-black">{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StorefrontPage({
  heroSlides,
  categories,
  categoryImage,
  categoryTitle,
  categoryText,
  categoryProducts,
  story,
  storyImage,
  storyCards,
  collectionTitle,
  collectionText,
  collectionProducts,
  splitPromos,
  community,
}) {
  return (
    <>
      <Hero slides={heroSlides} />
      <div className="h-130">
        <SubCategories categories={categories} />
      </div>

      <section className="bg-white px-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="overflow-hidden rounded-lg border">
            <img src={categoryImage} alt={categoryTitle} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{categoryTitle}</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{categoryText}</p>
            </div>
            <ProductRail items={categoryProducts} />
            <div className="mt-2 flex items-center justify-between px-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Categories in focus</p>
                <p className="mt-2 text-gray-700">Shop the most-wanted pieces for the season.</p>
              </div>
              <a href="#" className="hidden sm:inline-flex bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-gray-900">
                SHOP ALL
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-6">
        <SectionHeading title={story.title} text={story.text} actionLabel="VIEW ALL" actionHref={story.href || "#"} />
        <div className="mx-auto max-w-7xl space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <img src={storyImage} alt={story.title} className="h-96 w-full object-cover" />
          </div>
          <ImageCardRow cards={storyCards} />
        </div>
      </section>

      <section className="bg-white px-6 py-6">
        <SectionHeading title={collectionTitle} text={collectionText} actionLabel="VIEW ALL" actionHref="#" />
        <ProductRail items={collectionProducts} />
      </section>

      <section className="bg-white px-6 py-4">
        <PromoSplit left={splitPromos[0]} right={splitPromos[1]} />
      </section>

      <section className="bg-white px-6 py-6">
        <CommunityStrip title={community.title} text={community.text} cards={community.cards} />
      </section>

      <CTA />
    </>
  );
}
