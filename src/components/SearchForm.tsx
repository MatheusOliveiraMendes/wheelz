import React, { useState } from 'react';

interface SearchFormData {
  location: string;
  pickupDate: string;
  returnDate: string;
}

const SearchForm = () => {
  const [formData, setFormData] = useState<SearchFormData>({
    location: '',
    pickupDate: '',
    returnDate: ''
  });

  const handleInputChange = (field: keyof SearchFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search submitted:', formData);
    // Implement search functionality here
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="bg-white shadow-[0px_6px_12px_rgba(19,94,172,0.12)] flex w-full items-center gap-[40px_50px] flex-wrap mt-[201px] pl-8 pr-3 py-3 rounded-xl max-md:max-w-full max-md:mt-10 max-md:pl-5"
    >
      <div className="self-stretch flex min-w-60 items-center gap-4 flex-1 shrink basis-6 my-auto">
        <div className="self-stretch flex w-8 shrink-0 h-8 my-auto">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#3E3E3E"/>
          </svg>
        </div>
        <div className="self-stretch min-w-60 min-h-[37px] w-[278px] my-auto">
          <label className="text-[rgba(62,62,62,1)] text-base font-medium block">
            Location
          </label>
          <input
            type="text"
            placeholder="Search your location"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="text-[rgba(182,182,182,1)] text-sm font-normal mt-3 w-full border-none outline-none bg-transparent placeholder:text-[rgba(182,182,182,1)]"
          />
        </div>
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-4 flex-1 shrink basis-[0%] my-auto pl-6 border-[rgba(172,172,172,1)] border-l">
        <div className="self-stretch flex w-8 shrink-0 h-8 my-auto">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="self-stretch min-h-[37px] w-[183px] my-auto">
          <label className="text-[rgba(62,62,62,1)] text-base font-medium block">
            Pickup date
          </label>
          <input
            type="datetime-local"
            value={formData.pickupDate}
            onChange={(e) => handleInputChange('pickupDate', e.target.value)}
            className="text-[rgba(182,182,182,1)] text-sm font-normal mt-3 w-full border-none outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="self-stretch flex min-w-60 min-h-[37px] items-center gap-4 flex-1 shrink basis-[0%] my-auto pl-6 border-[rgba(172,172,172,1)] border-l">
        <div className="self-stretch flex w-8 shrink-0 h-8 my-auto">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="self-stretch my-auto">
          <label className="text-[rgba(62,62,62,1)] text-base font-medium block">
            Return date
          </label>
          <input
            type="datetime-local"
            value={formData.returnDate}
            onChange={(e) => handleInputChange('returnDate', e.target.value)}
            className="text-[rgba(182,182,182,1)] text-sm font-normal mt-3 w-full border-none outline-none bg-transparent"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[rgba(21,114,211,1)] self-stretch flex min-h-12 items-center gap-2 text-base text-white font-medium whitespace-nowrap justify-center w-[159px] my-auto px-2 py-[19px] rounded-lg hover:bg-[rgba(21,114,211,0.9)] transition-colors"
      >
        <div className="self-stretch my-auto">
          Search
        </div>
      </button>
    </form>
  );
};

export default SearchForm;