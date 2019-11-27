import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Button from './components/Button';

class App extends Component {
  
  state = {
    // dataBack: null,
    // pVisible: true
    data: null
  }

  // printMyName = (a) => {
  //   console.log("printMyName() method got executed ....", a);
  //   this.setState({ dataBack: a });
  // }

  // pToggle = () => {
  //   this.setState({ pVisible: !this.state.pVisible });
  // }

  getData = (childData) => {
    this.setState({ data: childData});
    console.log(childData);
  }

  printData = () => {
     console.log(this.state.data);
  }

  render() {
    return (
      <>
        {/* <Header siblingData={this.state.data} printMethod={this.printMyName} /> */}
        <Header printMethod={this.printMyName} />
        {/* <Button toggleHandler={this.pToggle} myCustomColor="pink" /> */}
        {/* {this.state.pVisible ? <p>This is a paragraph</p> : null} */}
        <Main bringData={this.getData} />
        {/* <p>{this.state.dataBack}</p> */}
        {/* { this.state.dataBack && <button onClick={() => this.setState({ dataBack: null })}>Clear data</button>} */}
        <Footer printMethod={this.printMyName} />
        <button onClick={this.printData}>Print Data</button>
      </>
    )
  }
}

export default App;