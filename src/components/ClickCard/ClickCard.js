import React from "react";
import "./ClickCard.css";


const ClickCard = props => (
    <div 
        className="card" 
        value={props.id}
        onClick = {() => props.handleClick(props.id)}
    >
        <img alt={props.name} src={props.image}  />
    </div>
);

export default ClickCard;