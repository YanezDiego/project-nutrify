import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/profile/HomeScreen'
import MenuAppBar from './components/MenuAppBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <MenuAppBar/>
        </header>
        <body>
        <HomeScreen/>
        </body>
      </div>
    );
  }
}

export default App;
