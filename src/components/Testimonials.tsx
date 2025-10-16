
const Testimonials = () => {
  const testimonials = [
    {
      rating: 5.0,
      stars: 3,
      text: "I have been using your services for 3 years. Your service is great, I will continue to use your service.",
      name: "Jenny Wilson",
      location: "From New York, US",
      image: null
    },
    {
      rating: 5.0,
      stars: 5,
      text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
      name: "Charlie Johnson",
      location: "From New York, US",
      image: "https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/78c3e496ce23e85b50161b647229258e35cd37af?placeholderIfAbsent=true"
    }
  ];

  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <img
          key={i}
          src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/5c65ca21bce2d187b2d2efaca7bebfd0e2ec551c?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0 rounded-[1px]"
          alt="Star"
        />
      );
    }
    return stars;
  };

  return (
    <section className="relative bg-[rgba(247,251,255,1)] flex w-full flex-col overflow-hidden items-stretch px-5 md:px-10 lg:px-20 py-24">
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/9a6b53f0b0e869e0f3d86e7ddc5c8372033416c9?placeholderIfAbsent=true"
        className="pointer-events-none absolute right-8 top-8 hidden md:block w-[220px] lg:w-[280px] object-contain"
        alt="Decorative swoosh"
      />
      <div className="flex flex-col w-full max-w-[1120px] mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center bg-[rgba(21,114,211,0.08)] text-sm text-[rgba(21,114,211,1)] font-semibold px-6 py-3 rounded-lg">
              TESTIMONIALS
            </div>
            <h2 className="text-[rgba(51,51,51,1)] text-[38px] leading-[1.2] mt-6">
              What people say about us?
            </h2>
          </div>
          <p className="text-[rgba(92,92,92,1)] text-base leading-7 max-w-[360px]">
            Real feedback from renters who rely on us every day for smooth, stress-free journeys.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-10 mt-16 lg:mt-20 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl shadow-[0px_18px_32px_rgba(16,76,139,0.12)] hover:shadow-[0px_22px_42px_rgba(16,76,139,0.18)] transition-shadow flex flex-col"
            >
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  className="h-56 w-full object-cover rounded-t-3xl"
                  alt={`${testimonial.name} photo`}
                />
              )}
              <div className="flex flex-col gap-6 p-8">
                <div>
                  <div className="text-[rgba(56,56,56,1)] text-lg font-medium">
                    <span className="text-5xl font-semibold text-[rgba(56,56,56,1)]">
                      {testimonial.rating.toFixed(1)}
                    </span>{" "}
                    stars
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    {testimonial.stars === 3 && (
                      <img
                        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/119741cef40b626adf45293881ebbd0c674e5ec4?placeholderIfAbsent=true"
                        className="h-2 w-6 object-contain"
                        alt="Partial star"
                      />
                    )}
                    {renderStars(testimonial.stars)}
                  </div>
                </div>
                <blockquote className="text-[rgba(40,40,40,1)] text-lg leading-[28px] italic">
                  “{testimonial.text}”
                </blockquote>
                <div>
                  <div className="text-[rgba(37,37,37,1)] text-xl font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-[rgba(131,131,131,1)] text-sm mt-2">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </article>
          ))}
          <article className="relative bg-gradient-to-br from-[rgba(21,114,211,1)] to-[rgba(31,83,170,1)] text-white rounded-3xl overflow-hidden p-8 flex flex-col justify-between shadow-[0px_18px_32px_rgba(21,114,211,0.24)]">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-semibold leading-tight">
                Ready to share your experience?
              </h3>
              <p className="text-base text-[rgba(225,239,255,1)] leading-7">
                Tell us how we did and help thousands of other renters choose the right service.
              </p>
            </div>
            <button className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-[rgba(21,114,211,1)] font-semibold rounded-xl px-6 py-3 hover:bg-[rgba(240,248,255,1)] transition-colors">
              Leave a review
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/cc1a83569d544e67a006e1471cbf7b787cdd1d34?placeholderIfAbsent=true"
              className="absolute bottom-0 right-0 h-[180px] translate-x-10 translate-y-6 opacity-30"
              alt="Smiling customer"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
