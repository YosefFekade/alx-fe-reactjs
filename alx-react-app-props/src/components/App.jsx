import React, { createContext } from 'react';
import ProfilePage from './ProfilePage';

const UserContext = createContext(null);

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

function App() {
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
