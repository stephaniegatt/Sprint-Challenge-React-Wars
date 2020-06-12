// Write your Character component here
import React, { useState } from "react";
// import Axios from "axios";

const Character = (props) => {

    return (
        <div>
         <h2>{props.character.name}</h2>
        </div>
      );
}

export default Character