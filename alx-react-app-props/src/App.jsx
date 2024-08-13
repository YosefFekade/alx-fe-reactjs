import React from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components//Header';
import MainContent from './components//MainContent';
import Footer from './components//Footer';
import UserProfile from './components//UserProfile';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';


function App() {
 

const UserContext = createContext(null);

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

 
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>


  return (
   <div>
      <WelcomeMessage />
      <Header /> 
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
   </div>
  )
}

export default App
