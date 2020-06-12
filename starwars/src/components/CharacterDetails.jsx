import React from "react";
import Paragraph from "./Paragraph";
import H3 from "./H3";

export default function CharacterDetails(props) {
    return (
        <div>
            <H3>Detailed Info</H3>
            <Paragraph>Birth Year: {props.character.birth_year}</Paragraph>
            <Paragraph>Eye Color: {props.character.eye_color}</Paragraph>
            <Paragraph>Gender: {props.character.gender}</Paragraph>
            <Paragraph>Height: {props.character.height}</Paragraph>
        </div>
    )
}