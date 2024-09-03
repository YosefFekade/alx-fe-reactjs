import React from "react";
function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        <img className="rounded-full mx-auto w-36 h-36" src="https://via.placeholder.com/150" alt="User" />
        <h1 className="text-xl text-blue-500 my-4">John Doe</h1>
        <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;