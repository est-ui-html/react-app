import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            name: null
        }
        console.log("constructor() got executed .... ");
    }

    static getDerivedStateFromProps() {
        console.log("static getDerivedStateFromProps() is getting executed .... ");
        return null;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate() method got executed ....");
    }

    copyText(event) {
        this.setState({ name: event.target.innerText });
    }


    render() {
        console.log(this.props);
        console.log("render() method executed ... ");
        const records = this.state.userData.map((data) => {
            return (
                <div key={data.id} style={{ border: '2px solid red', margin: '5px', padding: '5px' }}>
                    <p><strong>id: </strong>{data.id}</p>
                    <p><strong>email: </strong>{data.email}</p>
                </div>
            )
        })

        return (
            <>
                {records}
            </>
        )
    }

    componentDidMount() {
        console.log("componentDidMount() method got executed ... ");
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                this.setState({ userData: res.data.splice(0,2) }, () => {
                    this.props.bringData(this.state.userData)
                });
            });
    }
}

export default Main;