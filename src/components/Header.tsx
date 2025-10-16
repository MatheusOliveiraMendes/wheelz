const navLinks = [
  { label: "Become a host", href: "#renter" },
  { label: "Deals", href: "#deals" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Wheelz", href: "#why-us" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur">
      <div className="border-b border-[rgba(226,234,244,1)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-5 md:px-10 lg:px-12">
          <nav className="flex w-full flex-wrap items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/wheels-header.png"
                className="w-40 lg:w-48 object-contain"
                alt="Wheels Logo"
              />
            </a>
            <div className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[rgba(72,72,72,1)] lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 transition-colors hover:bg-[rgba(236,245,255,0.6)] hover:text-[rgba(21,114,211,1)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-[rgba(226,234,244,1)] px-5 py-2.5 text-sm font-medium text-[rgba(72,72,72,1)] transition-colors hover:border-[rgba(21,114,211,1)] hover:text-[rgba(21,114,211,1)]">
                Sign in
              </button>
              <button className="rounded-full bg-[rgba(21,114,211,1)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[rgba(21,114,211,0.9)]">
                Create account
              </button>
            </div>
          </nav>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 text-sm text-[rgba(72,72,72,1)] lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-[rgba(226,234,244,1)] px-4 py-2 transition-colors hover:border-[rgba(21,114,211,1)] hover:text-[rgba(21,114,211,1)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
