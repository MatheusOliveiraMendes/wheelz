
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
    <section className="bg-[rgba(247,251,255,1)] flex w-full flex-col overflow-hidden items-stretch pb-[127px] max-md:max-w-full max-md:pb-[100px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/9a6b53f0b0e869e0f3d86e7ddc5c8372033416c9?placeholderIfAbsent=true"
        className="aspect-[1.23] object-contain w-[279px] max-w-full mr-[106px] max-md:mr-2.5"
        alt="Testimonials decoration"
      />
      <div className="flex mb-[-25px] flex-col items-center max-md:max-w-full max-md:mb-2.5">
        <div className="flex flex-col items-center font-medium max-md:max-w-full">
          <div className="bg-[rgba(21,114,211,0.1)] flex gap-2 text-sm text-[rgba(21,114,211,1)] whitespace-nowrap px-8 py-4 rounded-lg max-md:px-5">
            <div>TESTIMONIALS</div>
          </div>
          <h2 className="text-[rgba(51,51,51,1)] text-[38px] leading-[1.3] mt-6 max-md:max-w-full">
            What peole say about us?
          </h2>
        </div>
        <div className="flex gap-10 mt-20 max-md:max-w-full max-md:mt-10">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="bg-white shadow-[0px_12px_24px_rgba(16,76,139,0.16)] flex min-w-60 items-center rounded-3xl hover:shadow-[0px_16px_32px_rgba(16,76,139,0.24)] transition-shadow">
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  className="aspect-[0.91] object-contain w-[397px] self-stretch min-w-60 my-auto rounded-[0px_0px_0px_0px]"
                  alt={`${testimonial.name} photo`}
                />
              )}
              <div className="self-stretch flex min-w-60 w-[397px] flex-col justify-center my-auto pr-10 py-10">
                <div className="flex flex-col items-stretch">
                  <div className="text-[rgba(56,56,56,1)] text-2xl font-medium leading-9">
                    <span className="text-6xl text-[rgba(56,56,56,1)]">
                      {testimonial.rating}
                    </span>{" "}
                    stars
                  </div>
                  <div className="flex gap-1 mt-6">
                    {testimonial.stars === 3 && (
                      <img
                        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/119741cef40b626adf45293881ebbd0c674e5ec4?placeholderIfAbsent=true"
                        className="aspect-[0.25] object-contain w-1.5 shrink-0 rounded-[1px]"
                        alt="Partial star"
                      />
                    )}
                    {renderStars(testimonial.stars)}
                  </div>
                </div>
                <div className="flex max-w-full w-[317px] flex-col items-stretch mt-12 max-md:mt-10">
                  <blockquote className="text-[rgba(40,40,40,1)] text-lg font-normal leading-[27px]">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="mt-20 max-md:mt-10">
                    <div className="text-[rgba(37,37,37,1)] text-2xl font-medium">
                      {testimonial.name}
                    </div>
                    <div className="text-[rgba(131,131,131,1)] text-sm font-normal mt-4">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
          <div className="bg-white shadow-[0px_12px_24px_rgba(16,76,139,0.16)] flex min-w-60 items-center rounded-3xl">
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/cc1a83569d544e67a006e1471cbf7b787cdd1d34?placeholderIfAbsent=true"
              className="aspect-[0.65] object-contain w-[397px] self-stretch min-w-60 my-auto rounded-[0px_0px_0px_0px]"
              alt="Additional testimonial"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
