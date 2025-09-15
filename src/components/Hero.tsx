import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1120px] flex-col items-stretch max-md:max-w-full">
        <div className="flex items-stretch mt-[157px] max-md:mt-10">
          <div className="flex mr-[-143px] w-fit flex-col items-stretch grow shrink-0 basis-0">
            <h1 className="text-[rgba(21,114,211,1)] text-5xl font-semibold leading-[48px] max-md:text-[40px] max-md:leading-[45px]">
              <span className="text-[rgba(36,36,36,1)]">
                Find, book and rent a car
              </span>{" "}
              Easily
            </h1>
            <p className="text-[rgba(39,39,39,1)] text-lg font-normal leading-[27px] mt-10">
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
            <div className="flex gap-3 mt-10">
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
          <img
            src="/lovable-uploads/c2b64d56-be22-41c8-bb23-ffcff0d4a0c2.png"
            className="aspect-[2] object-contain w-[400px] shrink-0 max-w-full mt-[88px] max-md:mt-10"
            alt="Blue Porsche sports car"
          />
        </div>
        <SearchForm />
      </div>
    </section>
  );
};

export default Hero;
