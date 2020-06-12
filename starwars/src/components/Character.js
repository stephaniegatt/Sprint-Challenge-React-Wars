// Write your Character component here
import React, { useState } from "react";
import Button from "./Button";
import CharacterDetails from "./CharacterDetails";

const Character = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div>
         <Button onClick={toggleOpen}>{props.character.name}</Button>
         { isOpen && 
         <CharacterDetails character={props.character} />
         }
        </div>
      );
}

export default Character