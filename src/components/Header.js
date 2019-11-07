import React from 'react';
import Button from './Button';

const header = (props) => {
    return (
        <>
            <h1>Header {props.name} </h1>
            <Button myClick={props.printMethod} myCustomColor="blue" />
            <Button myClick={props.printMethod} myCustomColor="red" />
        </>
    )
}

export default header;