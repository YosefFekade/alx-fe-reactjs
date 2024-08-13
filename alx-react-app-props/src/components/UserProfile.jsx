import React from "react";
import UserContext from "./UserContext"

const UserProfile = (props) => {
   return (
     <div>
      <UserContext.Provider value={userData}>
          <h2>{props.name}</h2>
          <p>Age: {props.age}</p>
          <p>Bio: {props.bio}</p>
      </UserContext.Provider>
     </div>
   );
 };
export default UserProfile;
