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
      image: "https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/f43069ce9b367c19a9d5ca0886047bfc1791937d?placeholderIfAbsent=true",
      imageAspect: "aspect-[2]",
      imageWidth: "w-52",
      marginTop: "mt-[-130px]"
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
      image: "https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/d63db47e68db94fdf3376e53448a668085007906?placeholderIfAbsent=true",
      imageAspect: "aspect-[2.3]",
      imageWidth: "w-[209px]",
      marginTop: "mt-[-127px]"
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
      image: "https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/33fad99e2dabec2553d0c43a4ec08a743e641069?placeholderIfAbsent=true",
      imageAspect: "aspect-[2.15]",
      imageWidth: "w-52",
      marginTop: "-mt-32"
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
      image: "https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/4ce9cb06fb1d07a34255ce85dfc72fc579c97b3e?placeholderIfAbsent=true",
      imageAspect: "aspect-[2.44]",
      imageWidth: "w-52",
      marginTop: "mt-[-123px]"
    }
  ];

  const handleShowAllVehicles = () => {
    console.log('Show all vehicles clicked');
    // Implement navigation to all vehicles page
  };

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-20 py-[84px] max-md:max-w-full max-md:px-5">
      <div className="flex flex-col items-center max-md:max-w-full">
        <div className="flex flex-col items-center font-medium max-md:max-w-full">
          <div className="bg-[rgba(21,114,211,0.1)] flex gap-2 text-sm text-[rgba(21,114,211,1)] px-8 py-4 rounded-lg max-md:px-5">
            <div>POPULAR RENTAL DEALS</div>
          </div>
          <h2 className="text-[rgba(51,51,51,1)] text-[38px] leading-[1.3] mt-6 max-md:max-w-full">
            Most popular cars rental deals
          </h2>
        </div>
        <div className="flex gap-8 flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
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
              marginTop={car.marginTop}
            />
          ))}
        </div>
        <button
          onClick={handleShowAllVehicles}
          className="border flex min-h-12 w-[216px] max-w-full items-center gap-2 text-sm text-[rgba(78,78,78,1)] font-medium leading-[1.3] justify-center mt-16 px-2 py-3.5 rounded-lg border-[rgba(224,224,224,1)] border-solid max-md:mt-10 hover:bg-gray-50 transition-colors"
        >
          <div className="self-stretch my-auto">
            Show all vehicles
          </div>
          <div className="self-stretch flex w-5 shrink-0 h-5 my-auto">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default PopularDeals;