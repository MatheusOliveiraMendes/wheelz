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
      className="grid w-full -mt-10 md:-mt-14 lg:-mt-20 gap-6 rounded-3xl border border-white/70 bg-white/80 px-6 py-6 text-sm shadow-[0px_24px_48px_rgba(16,76,139,0.14)] backdrop-blur md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto] lg:gap-8 lg:px-10 lg:py-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(236,245,255,1)] shadow-[0px_10px_16px_rgba(21,114,211,0.14)]">
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
            placeholder="Enter city or airport"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="mt-2 w-full border-none bg-transparent text-sm font-normal text-[rgba(109,109,109,1)] placeholder:text-[rgba(182,182,182,1)] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:border-l lg:border-[rgba(226,234,244,0.6)] lg:pl-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(236,245,255,1)] shadow-[0px_10px_16px_rgba(21,114,211,0.14)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex-1">
          <label className="text-[rgba(62,62,62,1)] text-base font-medium block">
            Pick-up date
          </label>
          <input
            type="datetime-local"
            value={formData.pickupDate}
            onChange={(e) => handleInputChange('pickupDate', e.target.value)}
            className="mt-2 w-full border-none bg-transparent text-sm font-normal text-[rgba(109,109,109,1)] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:border-l lg:border-[rgba(226,234,244,0.6)] lg:pl-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(236,245,255,1)] shadow-[0px_10px_16px_rgba(21,114,211,0.14)]">
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
            className="mt-2 w-full border-none bg-transparent text-sm font-normal text-[rgba(109,109,109,1)] focus:outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex h-full min-h-[56px] w-full items-center justify-center rounded-2xl bg-[rgba(21,114,211,1)] px-6 text-base font-semibold text-white transition-colors hover:bg-[rgba(21,114,211,0.92)] lg:w-[180px]"
      >
        <div className="self-stretch my-auto">
          Search cars
        </div>
      </button>
    </form>
  );
};

export default SearchForm;
