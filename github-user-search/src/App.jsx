import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';
import Search from './components/Search';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search Application</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>Name: {user.name}</p>
          <p>Username: {user.login}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;