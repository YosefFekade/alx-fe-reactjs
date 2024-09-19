import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    setResults(null);
  
    const query = `q=${username ? username : ''}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>${minRepos}` : ''}&page=${page}`;
  
    try {
      const response = await axios.get(`https://api.github.com/search/users?${query}`);
      setResults(response.data.items);
    } catch (err) {
      setError('No users found');
    } finally {
      setLoading(false);
    }
  };
  
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchUserData();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Min Repositories</label>
          <input
            type="number"
            placeholder="Minimum repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Search
        </button>
      </form>

      {/* Display loading, error, or results */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {results && (
        <ul className="mt-4 space-y-4">
          {results.map((user) => (
            <li key={user.id} className="border p-4 rounded-lg">
              <img src={user.avatar_url} alt={user.login} width="50" className="inline-block mr-4" />
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}
      <button onClick={loadMore} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
             Load More
      </button>
    </div>
  );
};

export default Search;