import React, { Component } from 'react';
import './App.css';
import GridHeader from './Components/header/GridHeader'
import GridContent from './Components/content/GridContent'



class App extends Component {
  render() {
    return (
      <div>
        <GridHeader />
        <GridContent />
    
      </div>
             
      
    );
  }
}


export default App;
