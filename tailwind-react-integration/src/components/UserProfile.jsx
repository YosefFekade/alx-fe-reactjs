import React from "react";
function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 sm:max-w-xs md:p-8 md:max-w-sm hover:shadow-xl">
        <img className="rounded-full mx-auto md:w-36 md:h-36 sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-300 ease-in-out" src="https://via.placeholder.com/150" alt="User" />
        <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl hover:text-blue-500">John Doe</h1>
        <p className="text-gray-600 text-base sm:text-sm md:text-base hover:text-blue-500">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;
