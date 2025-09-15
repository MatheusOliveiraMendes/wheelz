const Header = () => {
  return (
    <header className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-20 py-11 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1120px] flex-col items-stretch max-md:max-w-full">
        <nav className="flex w-full items-center gap-[40px_100px] text-base font-medium justify-between flex-wrap max-md:max-w-full">
          <div className="self-stretch flex items-center gap-2 text-[rgba(21,114,211,1)] font-semibold whitespace-nowrap my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/bde045eb95dc2e604aec83d115f08908d793078b?placeholderIfAbsent=true"
              className="aspect-[0.96] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="RentCars Logo"
            />
            <div className="self-stretch my-auto">
              RENTCARS
            </div>
          </div>
          <div className="self-stretch flex min-w-60 items-center gap-10 text-[rgba(72,72,72,1)] justify-center flex-wrap my-auto max-md:max-w-full">
            <button className="self-stretch my-auto hover:text-[rgba(21,114,211,1)] transition-colors">
              Become a renter
            </button>
            <button className="self-stretch my-auto hover:text-[rgba(21,114,211,1)] transition-colors">
              Rental deals
            </button>
            <button className="self-stretch my-auto hover:text-[rgba(21,114,211,1)] transition-colors">
              How it work
            </button>
            <button className="self-stretch my-auto hover:text-[rgba(21,114,211,1)] transition-colors">
              Why choose us
            </button>
          </div>
          <div className="self-stretch flex items-center gap-6 my-auto">
            <button className="text-[rgba(72,72,72,1)] self-stretch my-auto hover:text-[rgba(21,114,211,1)] transition-colors">
              Sign in
            </button>
            <button className="bg-[rgba(21,114,211,1)] self-stretch flex items-center gap-2 text-white justify-center my-auto px-8 py-4 rounded-lg max-md:px-5 hover:bg-[rgba(21,114,211,0.9)] transition-colors">
              <div className="self-stretch my-auto">
                Sign up
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
