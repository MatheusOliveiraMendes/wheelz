import CarCard from './CarCard';

const PopularDeals = () => {
  const cars = [
    {
      name: "Jaguar XE L P250",
      rating: 4.8,
      reviews: 2436,
      passengers: 4,
      transmission: "Auto",
      airConditioning: true,
      doors: 4,
      price: 1800,
      image: "/bluecar.png",
      imageAspect: "aspect-[2]",
      imageWidth: "w-52",
    },
    {
      name: "Audi R8",
      rating: 4.6,
      reviews: 1936,
      passengers: 2,
      transmission: "Auto",
      airConditioning: true,
      doors: 2,
      price: 2100,
      image: "/audi.png",
      imageAspect: "aspect-[2.3]",
      imageWidth: "w-[209px]",
    },
    {
      name: "BMW M3",
      rating: 4.5,
      reviews: 2036,
      passengers: 4,
      transmission: "Auto",
      airConditioning: true,
      doors: 4,
      price: 1600,
      image: "/bmw.png",
      imageAspect: "aspect-[2.15]",
      imageWidth: "w-52",
    },
    {
      name: "Lamborghini Huracan",
      rating: 4.3,
      reviews: 2236,
      passengers: 2,
      transmission: "Auto",
      airConditioning: true,
      doors: 2,
      price: 2300,
      image: "/lambo.png",
      imageAspect: "aspect-[2.44]",
      imageWidth: "w-52",
    },
  ];

  const handleShowAllVehicles = () => {
    console.log('Show all vehicles clicked');
    // Implement navigation to all vehicles page
  };

  return (
    <section
      id="deals"
      className="relative overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-12 lg:py-[120px]"
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[rgba(236,245,255,1)] to-transparent" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(21,114,211,0.1)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(21,114,211,1)]">
              Popular rental deals
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-[rgba(41,41,41,1)] md:text-[40px]">
              Community favorites our drivers love this week
            </h2>
            <p className="text-base text-[rgba(92,92,92,1)] lg:max-w-xl">
              Iconic models with special pricing, full protection, 24h assistance, and free cancellation included.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[rgba(226,234,244,1)] bg-white px-4 py-2 text-sm text-[rgba(72,72,72,1)] shadow-[0px_14px_28px_rgba(21,114,211,0.08)]">
            <button className="rounded-full bg-[rgba(21,114,211,1)] px-4 py-2 text-white">
              Sports
            </button>
            <button className="rounded-full px-4 py-2 hover:text-[rgba(21,114,211,1)]">
              SUVs
            </button>
            <button className="rounded-full px-4 py-2 hover:text-[rgba(21,114,211,1)]">
              Executive
            </button>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cars.map((car, index) => (
            <CarCard
              key={index}
              name={car.name}
              rating={car.rating}
              reviews={car.reviews}
              passengers={car.passengers}
              transmission={car.transmission}
              airConditioning={car.airConditioning}
              doors={car.doors}
              price={car.price}
              image={car.image}
              imageAspect={car.imageAspect}
              imageWidth={car.imageWidth}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleShowAllVehicles}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(21,114,211,0.2)] bg-white px-6 py-3 text-sm font-semibold text-[rgba(72,72,72,1)] transition-colors hover:bg-[rgba(21,114,211,0.08)]"
          >
            Explore the full fleet
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(21,114,211,0.12)] text-[rgba(21,114,211,1)]">
              <svg
                width="16"
                height="16"
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
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDeals;
