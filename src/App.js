import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends Component {

  printMyName(abc) {
    console.log(abc);
    console.log("printMyName() method got executed ....");
  }

  render() {
    return (
      <>
        <Header printMethod={this.printMyName} name="abc" />
        <Main name="xyz" />
        <Footer printMethod={this.printMyName} />
      </>
    )
  }
}

export default App;