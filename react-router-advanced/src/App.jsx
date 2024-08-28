import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<ProtectedRoute component={Profile} />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;