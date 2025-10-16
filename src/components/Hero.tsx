import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <section className="relative bg-white flex w-full flex-col overflow-visible items-center justify-center px-5 md:px-10 lg:px-20 pt-16 pb-20 lg:pt-20">
      <div className="flex w-full max-w-[1120px] flex-col items-stretch mx-auto gap-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex w-full lg:basis-1/2 flex-col items-stretch lg:pr-12 xl:pr-16 -mt-8 sm:-mt-8 lg:-mt-18">
            <h1 className="text-[rgba(21,114,211,1)] text-5xl font-semibold leading-[48px] max-lg:text-[44px] max-lg:leading-[46px] max-md:text-[38px] max-md:leading-[44px]">
              <span className="text-[rgba(36,36,36,1)]">
                Find, book and rent a car
              </span>{" "}
              <span className="text-[rgba(21,114,211,1)] relative inline-flex flex-col">
                Easily
                <span className="mt-1 h-[6px] w-full rounded-full bg-[rgba(21,114,211,0.25)]"></span>
              </span>
            </h1>
            <p className="text-[rgba(39,39,39,1)] text-lg font-normal leading-[27px] mt-4 max-w-[460px]">
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/4657cc419cc5c5b68a49a890ec60d35abfd7fd65?placeholderIfAbsent=true"
                className="aspect-[3.36] object-contain w-[124px] shrink-0 rounded-[7px] cursor-pointer hover:opacity-80 transition-opacity"
                alt="Download on App Store"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/5e59e17f1b0628bd2cb6162e27bb101bb6688e0c?placeholderIfAbsent=true"
                className="aspect-[3.36] object-contain w-[124px] shrink-0 rounded-[7px] cursor-pointer hover:opacity-80 transition-opacity"
                alt="Get it on Google Play"
              />
            </div>
          </div>
          <div className="relative w-full lg:flex-1 max-w-full mt-6 lg:mt-0 flex items-end justify-center lg:justify-end overflow-visible min-h-[320px]">
            <img
              src="/Frame.png"
              className="pointer-events-none absolute top-[-45%] right-[-24%] w-[640px] sm:w-[760px] lg:w-[920px] lg:top-[-70%] lg:right-[-36%] z-20 object-contain"
              alt="Decorative frame background"
            />
            <img
              src="/car 2 1.png"
              className="relative z-30 object-contain w-[92%] sm:w-[100%] lg:w-[115%] max-w-none mr-[-72px] sm:mr-[-120px] lg:mr-[-180px]"
              alt="Sports car"
            />
          </div>
        </div>
        <SearchForm />
      </div>
    </section>
  );
};

export default Hero;
