
const Footer = () => {
  const productLinks = ["Career", "Car", "Packages", "Features", "Priceline"];
  const resourceLinks = ["Download", "Help Centre", "Guides", "Partner Network", "Cruises", "Developer"];
  const aboutLinks = ["Why choose us", "Our Story", "Investor Relations", "Press Center", "Advertise"];

  return (
    <footer className="bg-[rgba(5,28,52,1)] flex w-full flex-col overflow-hidden items-center justify-center px-20 py-[41px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1120px] flex-col max-md:max-w-full">
        <div className="w-full max-w-[1064px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[22%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch justify-center max-md:mt-10">
                <div className="flex items-center gap-2 text-base text-white font-semibold whitespace-nowrap">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/3aa334e12bf6cae25ce78040ef1019518b30aab4?placeholderIfAbsent=true"
                    className="aspect-[0.92] object-contain w-6 self-stretch shrink-0 my-auto"
                    alt="RentCars Logo"
                  />
                  <div className="self-stretch my-auto">
                    RENTCARS
                  </div>
                </div>
                <div className="flex flex-col text-sm text-[rgba(214,214,214,1)] font-normal mt-8">
                  <div className="self-stretch flex items-center gap-2 leading-[21px]">
                    <div className="self-stretch flex w-6 shrink-0 h-6 my-auto">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#D6D6D6"/>
                      </svg>
                    </div>
                    <div className="w-[159px] my-auto">
                      25566 Hc 1, Glenallen, Alaska, 99588, USA
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-6">
                    <div className="self-stretch flex w-6 shrink-0 h-6 my-auto">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#D6D6D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="self-stretch my-auto">
                      +603 4784 273 12
                    </div>
                  </div>
                  <div className="flex items-center gap-2 whitespace-nowrap mt-6">
                    <div className="self-stretch flex w-6 shrink-0 h-6 my-auto">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#D6D6D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="#D6D6D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="self-stretch my-auto">
                      rentcars@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow mt-[7px] max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-3/12 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch max-md:mt-10">
                      <h3 className="text-white text-base font-medium">
                        Our Product
                      </h3>
                      <nav className="text-sm text-[rgba(214,214,214,1)] font-normal whitespace-nowrap mt-8">
                        {productLinks.map((link, index) => (
                          <div key={index} className={index > 0 ? "mt-4" : ""}>
                            <button className="hover:text-white transition-colors">
                              {link}
                            </button>
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="max-md:mt-10">
                      <h3 className="text-white text-base font-medium">
                        Resources
                      </h3>
                      <nav className="text-sm text-[rgba(214,214,214,1)] font-normal mt-8">
                        {resourceLinks.map((link, index) => (
                          <div key={index} className={index > 0 ? "mt-4" : ""}>
                            <button className="hover:text-white transition-colors">
                              {link}
                            </button>
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-center max-md:mt-10">
                      <h3 className="text-white text-base font-medium">
                        About Rentcars
                      </h3>
                      <nav className="text-sm text-[rgba(214,214,214,1)] font-normal mt-8">
                        {aboutLinks.map((link, index) => (
                          <div key={index} className={index > 0 ? "mt-4" : ""}>
                            <button className="hover:text-white transition-colors">
                              {link}
                            </button>
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="max-md:mt-10">
                      <h3 className="text-white text-base font-medium">
                        Follow Us
                      </h3>
                      <div className="flex items-center gap-4 mt-8">
                        <button className="hover:opacity-80 transition-opacity">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="#D6D6D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="hover:opacity-80 transition-opacity">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#D6D6D6" strokeWidth="2"/>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="#D6D6D6" strokeWidth="2"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#D6D6D6" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </button>
                        <button className="hover:opacity-80 transition-opacity">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" stroke="#D6D6D6" strokeWidth="2"/>
                            <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" stroke="#D6D6D6" strokeWidth="2"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border self-stretch shrink-0 h-px mt-[63px] border-[rgba(87,87,87,1)] border-solid max-md:max-w-full max-md:mt-10" />
        <div className="text-[rgba(214,214,214,1)] text-xs font-normal mt-8">
          Copyright 2023 ・ Rentcars, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
