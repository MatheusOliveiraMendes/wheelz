
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
    <section className="bg-white flex w-full flex-col overflow-hidden items-stretch justify-center px-5 md:px-10 lg:px-20 py-24">
      <div className="flex flex-col w-full max-w-[1120px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="lg:w-[360px]">
            <div className="bg-[rgba(21,114,211,0.08)] text-sm text-[rgba(21,114,211,1)] font-semibold inline-flex px-6 py-3 rounded-lg">
              HOW IT WORK
            </div>
            <h2 className="text-[rgba(51,51,51,1)] text-[38px] leading-[1.3] mt-6">
              Rent with following 3 working steps
            </h2>
          </div>
          <p className="text-[rgba(92,92,92,1)] text-base leading-7 max-w-[400px]">
            Follow these simple steps to reserve your car and get on the road in no time.
          </p>
        </div>
        <div className="grid gap-10 mt-16 lg:mt-20 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={index} className="flex flex-col bg-[rgba(243,248,255,1)] rounded-3xl p-8 shadow-[0px_10px_30px_rgba(21,114,211,0.08)] hover:shadow-[0px_18px_40px_rgba(21,114,211,0.12)] transition-shadow">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0px_8px_18px_rgba(21,114,211,0.12)]">
                <div className="flex h-10 w-10 items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <div className="flex flex-col font-medium justify-center mt-8">
                <h3 className="text-black text-2xl">
                  {step.title}
                </h3>
                <p className="text-[rgba(109,109,109,1)] text-base leading-7 mt-4 whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
