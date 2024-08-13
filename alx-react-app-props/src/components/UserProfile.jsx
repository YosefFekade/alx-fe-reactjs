import React from "react";
import UserContext from "./UserContext"

const UserProfile = (props) => {
   return (
     <div>
      <UserContext>
          <h2>{props.UserContext}</h2>
          <p>Age: {props.UserContext}</p>
          <p>Bio: {props.UserContext}</p>
      </UserContext>
     </div>
   );
 };
export default UserProfile;
