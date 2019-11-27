import React from 'react';

class Button extends React.Component {
    render(){
        return (
            <button onClick={this.props.toggleHandler} style={{ backgroundColor: this.props.myCustomColor, color: "white", padding: '3px', margin: '5px'}} >Click me</button> 
        )
    }
}

export default Button;