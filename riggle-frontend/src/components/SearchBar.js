import { useState } from 'react';
import axios from 'axios';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`/api/search?q=${searchQuery}`)
      .then(res => setResults(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map(result => <li key={result.id}>{result.user.username}</li>)}
      </ul>
    </div>
  );
}

export default SearchBar;
