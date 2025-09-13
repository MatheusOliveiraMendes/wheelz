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
  marginTop: string;
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
  imageWidth,
  marginTop
}) => {
  const handleRentNow = () => {
    console.log(`Rent now clicked for ${name}`);
    // Implement rent now functionality
  };

  return (
    <article className="shadow-[0px_12px_24px_rgba(16,76,139,0.16)] min-w-60 w-64 pt-[26px] rounded-[0px_0px_0px_0px] hover:shadow-[0px_16px_32px_rgba(16,76,139,0.24)] transition-shadow">
      <img
        src={image}
        className={`${imageAspect} object-contain ${imageWidth} z-10 mx-6 max-md:mx-2.5`}
        alt={name}
      />
      <div className={`bg-white ${marginTop} rounded-2xl`}>
        <div className="bg-white flex min-h-[155px] max-w-full w-64 rounded-[16px_16px_0px_0px]" />
        <div className="max-w-full w-64 pb-6 px-6 max-md:px-5">
          <div className="flex w-full flex-col items-stretch">
            <div>
              <h3 className="text-neutral-800 text-base font-medium leading-none">
                {name}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-black font-normal leading-none mt-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/ad25870a4d52459ebbe632271519389f35df7315?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto rounded-[1px]"
                  alt="Star rating"
                />
                <div className="self-stretch my-auto">
                  <span className="font-medium">{rating}</span>{" "}
                  <span className="text-[rgba(128,128,128,1)]">
                    ({reviews.toLocaleString()} reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-52 text-xs text-[rgba(149,149,149,1)] font-normal leading-none mt-4">
              <div className="flex w-full items-center gap-[40px_41px]">
                <div className="self-stretch flex items-center gap-1 my-auto">
                  <div className="self-stretch flex w-5 shrink-0 h-5 my-auto">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="self-stretch my-auto">
                    {passengers} Passagers
                  </div>
                </div>
                <div className="self-stretch flex items-center gap-[5px] whitespace-nowrap my-auto">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/beccb272bade12bc9ec5a0998dc8665b6d2714d4?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                    alt="Transmission"
                  />
                  <div className="self-stretch my-auto">
                    {transmission}
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-[19px] mt-2">
                <div className="flex items-center gap-1">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/aa749db6016dde9871c6b974864eb5a842f9eeb6?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                    alt="Air conditioning"
                  />
                  <div className="self-stretch my-auto">
                    Air Conditioning
                  </div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/ec8d84eeb8f8cdeb996c14ce36712d73bf66a992?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                    alt="Doors"
                  />
                  <div className="self-stretch my-auto">
                    {doors} Doors
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-52 mt-6">
            <div className="border min-h-0 w-full border-[rgba(224,224,224,1)] border-solid" />
            <div className="flex w-full items-center gap-[40px_82px] font-normal justify-between mt-6">
              <div className="text-[rgba(89,89,89,1)] text-sm leading-none self-stretch my-auto">
                Price
              </div>
              <div className="text-black text-base leading-none self-stretch my-auto">
                <span className="font-semibold text-[rgba(41,41,41,1)]">
                  ${price.toLocaleString()}
                </span>{" "}
                <span className="text-sm text-[rgba(156,156,156,1)]">
                  /day
                </span>
              </div>
            </div>
            <button
              onClick={handleRentNow}
              className="bg-[rgba(21,114,211,1)] flex min-h-10 w-full items-center gap-2 text-sm text-white font-medium leading-none justify-center mt-6 px-2 py-2.5 rounded-lg hover:bg-[rgba(21,114,211,0.9)] transition-colors"
            >
              <div className="self-stretch my-auto">
                Rent Now
              </div>
              <div className="self-stretch flex w-5 shrink-0 h-5 my-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CarCard;