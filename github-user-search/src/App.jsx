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
      setError('Looks like we can\'t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search Application</h1>
      <Search
        onSearch={handleSearch}
        user={user}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;