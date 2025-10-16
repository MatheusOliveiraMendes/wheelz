const testimonials = [
  {
    rating: 5.0,
    stars: 5,
    text: "I've relied on Wheelz for two years of business travel. I reserve through the app, pick up at the airport, and I'm on the road. The service is flawless!",
    name: "Jenny Wilson",
    location: "New York, NY",
    image: "/Smiling.jpg",
  },
  {
    rating: 4.9,
    stars: 5,
    text: "The concierge upgraded me to a convertible within minutes. It quickly became my go-to app for weekend getaways.",
    name: "Charlie Johnson",
    location: "Los Angeles, CA",
    image: "/Charlie-Johnson.png",
  },
];

const renderStars = (count: number) =>
  Array.from({ length: 5 }).map((_, index) => (
    <img
      key={index}
      src="/Star.png"
      className={`h-5 w-5 object-contain ${index < count ? "" : "opacity-30"}`}
      alt={index < count ? "Filled star" : "Empty star"}
    />
  ));

const Testimonials = () => {
  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-[rgba(247,251,255,1)] px-6 py-24 md:px-10 lg:px-12 lg:py-[120px]"
    >
      <img
        src="/Decorative-swoosh.png"
        className="pointer-events-none absolute right-10 top-20 hidden h-[280px] w-[240px] object-contain lg:block"
        alt="Decorative swoosh"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(21,114,211,0.1)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(21,114,211,1)]">
              Real experiences
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-[rgba(41,41,41,1)] md:text-[40px]">
              Stories from drivers who trust Wheelz
            </h2>
          </div>
          <p className="text-base leading-7 text-[rgba(92,92,92,1)]">
            Every rating highlights peace of mind, speed, and support from booking to drop-off. See how our community gets the most from on-demand mobility.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex flex-col overflow-hidden rounded-3xl border border-[rgba(226,234,244,1)] bg-white/80 shadow-[0px_20px_36px_rgba(21,114,211,0.1)] backdrop-blur"
              >
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    className="h-56 w-full object-cover"
                    alt={`Photo of ${testimonial.name}`}
                  />
                )}
                <div className="flex flex-col gap-6 p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-semibold text-[rgba(21,114,211,1)]">
                      {testimonial.rating.toFixed(1)}
                    </span>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.stars)}
                    </div>
                  </div>
                  <blockquote className="text-base leading-7 text-[rgba(56,56,56,1)]">
                    “{testimonial.text}”
                  </blockquote>
                  <div>
                    <div className="text-lg font-semibold text-[rgba(40,40,40,1)]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[rgba(120,120,120,1)]">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <article className="flex h-full flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[rgba(21,114,211,1)] to-[rgba(12,48,112,1)] p-10 text-white shadow-[0px_24px_48px_rgba(21,114,211,0.28)]">
            <div className="space-y-5">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                Share your journey
              </span>
              <h3 className="text-3xl font-semibold leading-snug">
                Your voice helps others choose their next ride
              </h3>
              <p className="text-sm leading-7 text-[rgba(215,230,255,1)]">
                Tell the Wheelz community about your ride: pick-up speed, vehicle condition, concierge support—every detail guides another traveler.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[rgba(21,114,211,1)] transition-colors hover:bg-[rgba(240,248,255,1)]">
              Leave a review
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
