import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

function App() {
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
