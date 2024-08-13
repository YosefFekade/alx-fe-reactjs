import React from "react";
import UserContext from "./UserContext"

const UserProfile = (props) => {
   return (
     <div>
         useContext
          <h2>{props.UserContext}</h2>
          <p>Age: {props.UserContext}</p>
          <p>Bio: {props.UserContext}</p>
     
     </div>
   );
 };
export default UserProfile;
