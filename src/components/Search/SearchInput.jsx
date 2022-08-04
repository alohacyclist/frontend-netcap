import { useEffect, useState } from "react";

export function SearchInput({ collection, logLocation, logActivity, locationBtn }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const inputFilter = (dataCollection) => {
    let results = dataCollection.filter(
      (data) =>
        data.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        data.country?.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    inputFilter(collection);
  }, [searchInput]);

  return (
    <>
      <div className="flex flex-col gap-3 justify-center">
        <input
          className=""
          value={searchInput}
          placeholder='Type to search...'
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {locationBtn &&
          <button className='w-full rounded-md bg-indigo-700 p-1'>
            Use current location
            </button>}
      </div>

      <div>
        {searchResults.map((result) => (
          <div  
          key={result.id}
          className='flex my-3 justify-between'
          >
            <label>{result.name}</label>
            <input
              id={result.id}
              type={result.type}
              name={result.category}
              value={result.name}
              onClick={() => {
                result.category === 'location' ? 
                  logLocation(result.category, result.name) :
                  logActivity(result.category, result.name)
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
