
const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12V7H5a2 2 0 100 4h14zm0 0v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2z" stroke="#1572D3" strokeWidth="2"/>
        </svg>
      ),
      title: "Best price guaranteed",
      description: "Find a lower price? We'll refund you 100%\nof the difference."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 108 0 4 4 0 00-8 0zM22 11l-3-3 3-3" stroke="#1572D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Experience driver",
      description: "Don't have driver? Don't worry, we have many\nexperienced driver for you."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#1572D3" strokeWidth="2"/>
          <polyline points="12,6 12,12 16,14" stroke="#1572D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "24 hour car delivery",
      description: "Book your car anytime and we will deliver it\ndirectly to you."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#1572D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "24/7 technical support",
      description: "Have a question? Contact Rentcars support\nany time when you have problem."
    }
  ];

  return (
    <section className="bg-white w-full overflow-hidden pr-20 py-[92px] max-md:max-w-full max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="relative flex items-center justify-start max-md:justify-center max-md:mt-10">
            <img
              src="/Vector.png"
              className="w-full max-w-[760px] lg:max-w-[840px] object-contain -translate-x-6 lg:-translate-x-10"
              alt="Decorative background"
            />
            <img
              src="/Audir8.png"
              className="absolute left-0 w-[95%] max-w-[660px] lg:max-w-[760px] object-contain drop-shadow-2xl"
              alt="Audi R8"
            />
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch justify-center max-md:max-w-full max-md:mt-10">
            <div className="flex w-full max-w-xl flex-col items-stretch font-medium justify-center max-md:max-w-full">
              <div className="bg-[rgba(21,114,211,0.1)] flex gap-2 text-sm text-[rgba(21,114,211,1)] px-8 py-4 rounded-lg max-md:px-5">
                <div>WHY CHOOSE US</div>
              </div>
              <h2 className="text-[rgba(51,51,51,1)] text-[38px] leading-[49px] mt-8 max-md:max-w-full">
                We offer the best experience with our rental deals
              </h2>
            </div>
            <div className="flex flex-col items-stretch justify-center mt-14 max-md:max-w-full max-md:mt-10">
              {features.map((feature, index) => (
                <article key={index} className={`flex items-center gap-6 ${index > 0 ? 'mt-10' : ''} max-md:max-w-full`}>
                  <div className="self-stretch flex flex-col items-center w-16 my-auto">
                    <div className="bg-[rgba(236,245,255,1)] flex min-h-16 w-16 flex-col items-center justify-center h-16 rounded-2xl">
                      <div className="flex min-h-6 w-6">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center my-auto">
                    <h3 className="text-black text-xl font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-[rgba(109,109,109,1)] text-base font-normal leading-6 mt-6 whitespace-pre-line">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
