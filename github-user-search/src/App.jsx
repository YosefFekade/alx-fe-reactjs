import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div>
      <h1  className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 sm:max-w-xs md:p-8 md:max-w-sm hover:shadow-xl">GitHub User Search Application</h1>
      <Search />
    </div>
  );
}

export default App;