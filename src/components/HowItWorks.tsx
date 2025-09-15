
const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1572D3"/>
        </svg>
      ),
      title: "Choose location",
      description: "Choose your and find\nyour best car"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#1572D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Pick-up date",
      description: "Select your pick up date and\ntime to book your car"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" stroke="#1572D3" strokeWidth="2"/>
          <path d="M13 6h4l3 5v6a1 1 0 01-1 1h-2m-8 0H7a1 1 0 01-1-1v-6l3-5h4v6" stroke="#1572D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Book your car",
      description: "Book your car and we will deliver\nit directly to you"
    }
  ];

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-stretch justify-center py-[86px] max-md:max-w-full">
      <div className="flex flex-col items-center max-md:max-w-full">
        <div className="flex flex-col items-center justify-center max-md:max-w-full">
          <div className="flex flex-col items-center font-medium max-md:max-w-full">
            <div className="bg-[rgba(21,114,211,0.1)] flex gap-2 text-sm text-[rgba(21,114,211,1)] px-8 py-4 rounded-lg max-md:px-5">
              <div>HOW IT WORK</div>
            </div>
            <h2 className="text-[rgba(51,51,51,1)] text-[38px] leading-[1.3] text-center mt-8 max-md:max-w-full">
              Rent with following 3 working steps
            </h2>
          </div>
          <div className="flex items-center gap-[40px_200px] justify-center flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
            {steps.map((step, index) => (
              <article key={index} className="self-stretch flex flex-col items-center w-28 my-auto">
                <div className="bg-[rgba(236,245,255,1)] flex min-h-28 w-28 flex-col items-center justify-center h-28 rounded-2xl">
                  <div className="flex min-h-12 w-12">
                    {step.icon}
                  </div>
                </div>
                <div className="flex flex-col items-center font-medium justify-center mt-10">
                  <h3 className="text-black text-xl">
                    {step.title}
                  </h3>
                  <p className="text-[rgba(109,109,109,1)] text-sm leading-[21px] text-center mt-6 whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="flex gap-[40px_96px] mt-40 max-md:max-w-full max-md:mt-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/2cfa6232b92c8c50d25b5a6db2c2264e038cb042?placeholderIfAbsent=true"
            className="aspect-[2.56] object-contain w-[172px] shrink-0"
            alt="Partner logo"
          />
          <div className="bg-white flex flex-col items-stretch justify-center w-56 py-[25px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/498d0336975530f9a6b4aadabf2005e04a2c22a0?placeholderIfAbsent=true"
              className="aspect-[13.16] object-contain w-56"
              alt="Partner logo"
            />
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/59be007abc05f6c471dea5bf26ea009da00d50ea?placeholderIfAbsent=true"
            className="aspect-[1.18] object-contain w-[79px] shrink-0"
            alt="Partner logo"
          />
          <div className="bg-white flex flex-col items-stretch justify-center w-56 py-[25px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/0e78de808c7f793e1debef3f7ce352a838c3c4e8?placeholderIfAbsent=true"
              className="aspect-[13.16] object-contain w-56"
              alt="Partner logo"
            />
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/12497645cd8bf67715181e070ceacbb11889f990?placeholderIfAbsent=true"
            className="aspect-[2.15] object-contain w-36 shrink-0"
            alt="Partner logo"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/c3c3e74a9c75d5c34b060d3d136321d4bcc727a6?placeholderIfAbsent=true"
            className="aspect-[1.75] object-contain w-[117px] shrink-0"
            alt="Partner logo"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;