export default function Footer() {
  const leftLinks = [
    "Shopping Guide",
    "Log In/Sign Up",
    "Exchange & Returns",
    "Shipping & Deliveries",
    "How To Buy",
    "Payment",
  ];

  const rightLinks = ["About Us", "Retail Stores", "Contact Us"];
  const logoSrc =
    "https://outfitters.com.pk/cdn/shop/files/W_f07a65ae-fc0a-4a50-aa34-5edec206acd6.png?v=1763353693&width=270";

  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1366px] flex-col gap-8 px-4 py-12 sm:px-8 sm:py-14 lg:px-[60px] lg:py-[58px]">
        <div className="grid items-start gap-8 lg:grid-cols-[268px_1fr] lg:gap-10">
          <div className="flex items-start justify-start">
            <img
              src={logoSrc}
              alt="Outfitters"
              className="h-auto w-[180px] sm:w-[220px] lg:w-[268px]"
            />
          </div>

          <div className="flex justify-end">
            <div className="grid grid-cols-1 gap-x-14 gap-y-[10px] text-right font-['Neue_Haas_Grotesk_Display_Pro',-apple-system,BlinkMacSystemFont,Arial,sans-serif] text-[12px] font-normal leading-4 tracking-[0.05em] text-white/75 sm:grid-cols-2">
              <ul className="space-y-[10px]">
                {leftLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-opacity duration-200 hover:opacity-75">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-[10px]">
                {rightLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-opacity duration-200 hover:opacity-75">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="font-['Neue_Haas_Grotesk_Display_Pro',-apple-system,BlinkMacSystemFont,Arial,sans-serif] text-right text-[10px] font-normal leading-[14px] tracking-[0.05em] text-white">
          @ Copyrights Reserved by Outfitters 2025
        </p>
      </div>
    </footer>
  );
}
