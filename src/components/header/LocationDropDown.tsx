import React, { useState, ChangeEvent } from "react";

interface LocationDropdownProps {
  onSelect: (country: string) => void;
}

const LocationDropdown: React.FC<LocationDropdownProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Argentina",
    "Australia",
    "Austria",
    "Bahrain",
    "Bangladesh",
    "Belgium",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Cambodia",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Croatia",
    "Denmark",
    "Egypt",
    "Ethiopia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Italy",
    "Japan",
    "Jordan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Luxembourg",
    "Malaysia",
    "Mexico",
    "Mongolia",
    "Morocco",
    "Myanmar ",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saudi Arabia",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Syria",
    "Thailand",
    "Togo",
    "Turkey",
    "Turkmenistan",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="absolute top-full left-0 bg-white text-black p-2 rounded shadow-md max-h-max w-48">
      <div className="sticky top-0 bg-white z-10">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-1 mb-2 border-b-2 border-gray-300 rounded"
        />
      </div>
      <div className="scrollbar-hidden max-h-52 overflow-y-auto">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <div
              key={country}
              className="cursor-pointer hover:bg-gray-100 p-1"
              onClick={() => onSelect(country)}
            >
              {country}
            </div>
          ))
        ) : (
          <div className="p-1 text-gray-400">No results</div>
        )}
      </div>
    </div>
  );
};

export default LocationDropdown;
