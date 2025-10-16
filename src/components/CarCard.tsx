import React from 'react';

interface CarCardProps {
  name: string;
  rating: number;
  reviews: number;
  passengers: number;
  transmission: string;
  airConditioning: boolean;
  doors: number;
  price: number;
  image: string;
  imageAspect: string;
  imageWidth: string;
}

const CarCard: React.FC<CarCardProps> = ({
  name,
  rating,
  reviews,
  passengers,
  transmission,
  doors,
  price,
  image,
  imageAspect,
  imageWidth
}) => {
  const handleRentNow = () => {
    console.log(`Rent now clicked for ${name}`);
    // Implement rent now functionality
  };

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(226,234,244,1)] bg-white/80 p-6 shadow-[0px_18px_32px_rgba(21,114,211,0.08)] backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-[0px_26px_48px_rgba(21,114,211,0.14)]">
      <div className="relative flex h-[180px] items-center justify-center overflow-visible">
        <div className="absolute inset-x-6 top-10 h-28 rounded-[32px] bg-[rgba(236,245,255,1)] blur-lg transition-all group-hover:top-8" />
        <img
          src={image}
          className={`relative z-10 ${imageAspect} ${imageWidth} max-w-full object-contain transition-transform duration-300 group-hover:-translate-y-1`}
          alt={name}
        />
      </div>
      <div className="mt-6 flex flex-1 flex-col">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-[rgba(30,30,30,1)]">
            {name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-[rgba(89,89,89,1)]">
            <img
              src="/Star.png"
              className="h-4 w-4 object-contain"
              alt="Star icon"
            />
            <span className="font-semibold text-[rgba(21,114,211,1)]">
              {rating.toFixed(1)}
            </span>
            <span className="text-[rgba(128,128,128,1)]">
              ({reviews.toLocaleString()} reviews)
            </span>
          </div>
        </div>
        <div className="mt-4 grid gap-3 text-sm text-[rgba(120,120,120,1)]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
                  stroke="#5E5E5E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {passengers} passengers
            </span>
            <span className="flex items-center gap-2">
              <img
                src="/manual-transmission.svg"
                className="h-5 w-5 object-contain filter brightness-0 invert-[55%]"
                alt="Transmission"
              />
              {transmission}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <img
                src="/air-conditioner.svg"
                className="h-5 w-5 object-contain filter brightness-0 invert-[55%]"
                alt="Air conditioning"
              />
              Air conditioning
            </span>
            <span className="flex items-center gap-2">
              <img
                src="/car.svg"
                className="h-5 w-5 object-contain filter brightness-0 invert-[55%]"
                alt="Doors"
              />
              {doors} doors
            </span>
          </div>
        </div>
        <div className="mt-6 border-t border-[rgba(226,234,244,1)] pt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[rgba(120,120,120,1)]">Daily rate from</span>
            <span className="text-lg font-semibold text-[rgba(30,30,30,1)]">
              ${price.toLocaleString()}
              <span className="ml-1 text-xs font-normal text-[rgba(128,128,128,1)]">
                /day
              </span>
            </span>
          </div>
          <button
            onClick={handleRentNow}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[rgba(21,114,211,1)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[rgba(21,114,211,0.92)]"
          >
            Book now
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
        </div>
      </div>
    </article>
  );
};

export default CarCard;
