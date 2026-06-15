export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-10 bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-10">
        {/* Left: Brand */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-8xl font-semibold">Outfitters</h1>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Shopping Guide</a>
            <a href="#" className="hover:underline">Log In/Sign Up</a>
            <a href="#" className="hover:underline">Exchange & Returns</a>
            <a href="#" className="hover:underline">Shipping & Deliveries</a>
            <a href="#" className="hover:underline">How To Buy</a>
            <a href="#" className="hover:underline">Payment</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Retail Stores</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="border-t justify-items-end">
        <p>@ Copyrigths Reserved by Outfitters 2025</p>
      </div>
    </footer>
  );
}
