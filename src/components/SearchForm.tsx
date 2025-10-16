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
      className="bg-white shadow-[0px_20px_40px_rgba(19,94,172,0.08)] border border-[rgba(226,234,244,1)] w-full max-w-[1040px] mx-auto -mt-12 lg:-mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto] items-center gap-6 lg:gap-8 px-6 lg:px-8 py-6 rounded-2xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(236,245,255,1)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#3E3E3E"/>
          </svg>
        </div>
        <div className="flex-1">
          <label className="text-[rgba(62,62,62,1)] text-base font-medium block">
            Location
          </label>
          <input
            type="text"
            placeholder="Search your location"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="text-[rgba(109,109,109,1)] text-sm font-normal mt-2 w-full border-none outline-none bg-transparent placeholder:text-[rgba(182,182,182,1)] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 lg:pl-6 lg:border-l lg:border-[rgba(226,234,244,1)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(236,245,255,1)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex-1">
          <label className="text-[rgba(62,62,62,1)] text-base font-medium block">
            Pickup date
          </label>
          <input
            type="datetime-local"
            value={formData.pickupDate}
            onChange={(e) => handleInputChange('pickupDate', e.target.value)}
            className="text-[rgba(109,109,109,1)] text-sm font-normal mt-2 w-full border-none outline-none bg-transparent focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 lg:pl-6 lg:border-l lg:border-[rgba(226,234,244,1)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(236,245,255,1)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex-1">
          <label className="text-[rgba(62,62,62,1)] text-base font-medium block">
            Return date
          </label>
          <input
            type="datetime-local"
            value={formData.returnDate}
            onChange={(e) => handleInputChange('returnDate', e.target.value)}
            className="text-[rgba(109,109,109,1)] text-sm font-normal mt-2 w-full border-none outline-none bg-transparent focus:outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[rgba(21,114,211,1)] text-base text-white font-medium whitespace-nowrap w-full lg:w-[168px] h-full min-h-[52px] flex items-center justify-center px-6 rounded-xl hover:bg-[rgba(21,114,211,0.9)] transition-colors"
      >
        <div className="self-stretch my-auto">
          Search
        </div>
      </button>
    </form>
  );
};

export default SearchForm;
