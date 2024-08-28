import React from 'react';

const Home = () => {
  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    alert('Logged in!');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;