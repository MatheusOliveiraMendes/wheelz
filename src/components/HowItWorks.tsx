
const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            fill="#1572D3"
          />
        </svg>
      ),
      title: "Set your pick-up spot",
      description: "Choose where you need the car and surface the best options nearby.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            stroke="#1572D3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Lock your perfect timing",
      description: "Select pick-up and drop-off in seconds with flexible scheduling windows.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
            stroke="#1572D3"
            strokeWidth="2"
          />
          <path
            d="M13 6h4l3 5v6a1 1 0 01-1 1h-2m-8 0H7a1 1 0 01-1-1v-6l3-5h4v6"
            stroke="#1572D3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Confirm and drive",
      description: "Complete the booking and have the car delivered or pick it up curbside.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-12 lg:py-[120px]"
    >
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[rgba(236,245,255,1)] to-transparent" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-[rgba(21,114,211,0.1)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(21,114,211,1)]">
              How it works
            </span>
            <h2 className="text-3xl font-semibold leading-snug text-[rgba(41,41,41,1)] md:text-[40px]">
              A booking flow built to get you behind the wheel faster
            </h2>
          </div>
          <p className="text-base leading-7 text-[rgba(92,92,92,1)] lg:pl-10">
            In just a few taps you compare, choose, and confirm the perfect ride. Real-time availability paired with human support whenever you need it.
          </p>
        </div>
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="absolute left-[calc(16.6%-0.25rem)] top-12 hidden h-[2px] w-[66%] bg-gradient-to-r from-[rgba(21,114,211,0.3)] via-[rgba(21,114,211,0.5)] to-[rgba(21,114,211,0.8)] lg:block" />
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative flex flex-col gap-6 rounded-3xl bg-[rgba(243,248,255,1)] p-8 shadow-[0px_20px_40px_rgba(21,114,211,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0px_26px_48px_rgba(21,114,211,0.14)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0px_12px_24px_rgba(21,114,211,0.14)]">
                  {step.icon}
                </div>
                <span className="text-3xl font-semibold text-[rgba(21,114,211,1)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[rgba(30,30,30,1)]">
                  {step.title}
                </h3>
                <p className="text-base leading-7 text-[rgba(109,109,109,1)]">
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
