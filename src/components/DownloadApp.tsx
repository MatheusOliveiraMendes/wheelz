
const DownloadApp = () => {
  const handleAppStoreClick = () => {
    console.log('App Store download clicked');
    // Implement App Store redirect
  };

  const handleGooglePlayClick = () => {
    console.log('Google Play download clicked');
    // Implement Google Play redirect
  };

  return (
    <section className="bg-white w-full overflow-hidden pr-20 max-md:max-w-full max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[56%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[500px] grow justify-center px-20 py-[100px] max-md:max-w-full max-md:mt-10 max-md:pl-5">
            <img
              src="/Vector.png"
              className="absolute h-full w-full object-cover inset-0"
              alt="Download app background"
            />
            <div className="relative flex w-[480px] max-w-full flex-col items-stretch">
              <div className="flex w-full max-w-[480px] flex-col items-stretch max-md:max-w-full">
                <div className="bg-[rgba(21,114,211,0.1)] flex gap-2 text-sm text-[rgba(21,114,211,1)] font-medium whitespace-nowrap px-8 py-4 rounded-lg max-md:px-5">
                  <div>DOWNLOAD</div>
                </div>
                <h2 className="text-[rgba(40,40,40,1)] text-5xl font-semibold leading-[58px] mt-6 max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                  Download Rentcars App for{" "}
                  <span className="text-[rgba(21,114,211,1)]">FREE</span>
                </h2>
              </div>
              <p className="text-[rgba(62,62,62,1)] text-base font-normal mt-10">
                For faster, easier booking and exclusive deals.
              </p>
              <div className="flex gap-4 mt-10">
                <button onClick={handleAppStoreClick}>
                  <img
                    src="/app-store.png"
                    className="aspect-[3.37] object-contain w-[175px] shrink-0 rounded-[10px] hover:opacity-80 transition-opacity"
                    alt="Download on App Store"
                  />
                </button>
                <button onClick={handleGooglePlayClick}>
                  <img
                    src="/google-play.png"
                    className="aspect-[3.37] object-contain w-[175px] shrink-0 rounded-[10px] hover:opacity-80 transition-opacity"
                    alt="Get it on Google Play"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[428px] grow mt-[72px] pt-5 px-[27px] max-md:max-w-full max-md:mt-10 max-md:px-5">
            <img
              src="/background.png"
              className="absolute h-full w-full object-cover inset-0"
              alt="App preview background"
            />
            <img
              src="/Mobile.png"
              className="relative aspect-[1.15] object-contain w-full bg-blend-normal max-md:max-w-full z-10"
              alt="Mobile app preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
