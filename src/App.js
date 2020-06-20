import React from 'react';
import Product from './Product';
import { Button } from "react-bootstrap";

function App() {
  
  const isValid = true

  return (
    <div className="App">
      <Product />
      <Button variant="warning" disabled= {!isValid} > Submit  </Button>
    </div>
  );
}

export default App;
