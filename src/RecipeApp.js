import React, { Component } from 'react';
import Navbar from './NavBar'
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
