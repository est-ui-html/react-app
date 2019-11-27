import React from 'react';
import Button from './Button';

const header = (props) => {
    console.log("Header's data : ", props.siblingData);
    return (
        <>
            <h1>Header {props.name} {JSON.stringify(props.siblingData)}</h1>
            {/* <Button myClick={props.printMethod} myCustomColor="blue" />
            <Button myClick={props.printMethod} myCustomColor="red" /> */}
        </>
    )
}

export default header;