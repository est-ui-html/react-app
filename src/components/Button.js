import React from 'react';

const button = (props) => {
    return (
        <button onClick={() => props.myClick("custom text")} style={{ backgroundColor: props.myCustomColor, color: "white"}} >Click me</button> 
    )
}

export default button;