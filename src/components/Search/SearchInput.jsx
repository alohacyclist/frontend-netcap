import { useEffect, useState } from "react";

export function SearchInput({ collection, click }) {
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

  const selector = (selection) => {
    click(selection);
  };

  return (
    <div>
      <div>
        <input
          className='search-filter'
          value={searchInput}
          placeholder='Type to search...'
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button className='form-btn-large'>Use current location</button>
      </div>

      <div>
        {searchResults.map((result) => (
          <div className='radio-selection' key={result.id}>
            <label>{result.name}</label>
            <input
              id={result.id}
              type={result.type}
              name='location'
              value={result.name}
              onClick={() => selector(result.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
