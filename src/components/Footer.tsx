const productLinks = ["Corporate plans", "Premium cars", "Subscriptions", "Gift cards"];
const resourceLinks = ["Help center", "Pick-up guide", "Travel tips", "Affiliates"];
const companyLinks = ["Our story", "Careers", "Press room", "Investors"];

const Footer = () => {
  return (
    <footer className="bg-[#041326] px-6 pb-12 pt-16 text-white md:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-8">
            <img
              src="/wheels-footer.png"
              className="w-40 object-contain"
              alt="Wheels Logo"
            />
            <p className="text-sm text-white/70">
              Premium mobility for every itinerary. From boardroom trips to road-trip escapes, Wheelz connects you to fast bookings, immaculate cars, and 24/7 human support.
            </p>
            <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2 sm:gap-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                  HQ
                </span>
                <span>350 5th Ave, Midtown • New York, NY</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                  24h
                </span>
                <span>Support via app, phone (+1 646 555-0140) or WhatsApp</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {["facebook", "instagram", "youtube", "linkedin"].map((network) => (
                <button
                  key={network}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:border-white/30 hover:bg-white/20"
                  aria-label={`Open ${network}`}
                >
                  <span className="text-sm font-semibold uppercase">
                    {network[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Products
              </h4>
              <nav className="mt-6 space-y-3 text-sm text-white/80">
                {productLinks.map((link) => (
                  <button key={link} className="transition-colors hover:text-white">
                    {link}
                  </button>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Resources
              </h4>
              <nav className="mt-6 space-y-3 text-sm text-white/80">
                {resourceLinks.map((link) => (
                  <button key={link} className="transition-colors hover:text-white">
                    {link}
                  </button>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Company
              </h4>
              <nav className="mt-6 space-y-3 text-sm text-white/80">
                {companyLinks.map((link) => (
                  <button key={link} className="transition-colors hover:text-white">
                    {link}
                  </button>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Download the app
              </h4>
              <div className="mt-6 space-y-3">
                <img
                  src="/app-store.png"
                  className="w-[160px] rounded-xl object-contain"
                  alt="Download on App Store"
                />
                <img
                  src="/google-play.png"
                  className="w-[160px] rounded-xl object-contain"
                  alt="Get it on Google Play"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-xs text-white/60">
          © 2024 Wheelz Smart Mobility. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
