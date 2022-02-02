import React from "react";
export default function Card(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <img src={props.image} alt={props.image.alt} />
            <a href={props.link}>{props.link}</a>
        </>
    );
}
