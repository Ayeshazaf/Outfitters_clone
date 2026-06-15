export default function CTA() {
  return (
    <section className="bg-white px-8 py-16 z-10">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Heading */}
        <div>
          <h2 className=" text-3xl mx-40 font-bold text-black">
            BE THE FIRST TO KNOW
          </h2>
        </div>

        {/* Right: Description + Form */}
        <div>
          <p className="text-gray-700 mb-6 font-semibold">
            GET AN UPDATE OF ALL OUR LATEST COLLECTIONS, DISCOUNTS & FEATURES COMING UP
          </p>

          <form className="flex flex-col space-y-4">
            <div className="border-b border-gray-400">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-transparent outline-none py-2 text-gray-800 placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-900 transition-colors"
            >
              SIGN ME UP!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
