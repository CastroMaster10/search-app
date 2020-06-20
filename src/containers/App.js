import React from 'react';
import Product from '../components/Product';
import { Button } from "react-bootstrap";
import Ratings from '../components/Ratings';

function App() {
  
  const isValid = true

  return (
    <div className="App">
      <Product />
      <Button variant="warning" disabled= {!isValid} > Submit  </Button>
      <Ratings rating= "1"/>
      <Ratings rating= "2"/>
      <Ratings rating= "3"/>
      <Ratings rating= "4"/>
      <Ratings rating= "5"/>
    </div>
  );
}

export default App;
