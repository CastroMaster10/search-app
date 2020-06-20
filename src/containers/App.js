import React from 'react';
import { Button } from "react-bootstrap";
import Products from '../components/Products';
import Jumbotron from '../components/Jumbotron';




function App() {
  




  return (
    <div className="App">

      {/* <Button variant="warning" onClick = {() => document.body.style.backgroundColor !== 'black' ?
      changeBackgroundToBlack() && changeFontToWhite(): changeBackgroundToWhite() && changeFontToBlack()} > Change Background </Button>
      <Products/> */}

        <Jumbotron>
          hola como estas
        </Jumbotron>
    </div>
  );
}


const changeBackgroundToBlack = () => {

  return document.body.style.backgroundColor = 'black'
}
const changeFontToBlack = () => {

  return document.body.style.color = 'black'
}

const changeBackgroundToWhite = () => {
  return document.body.style.backgroundColor = "white"
}
const changeFontToWhite = () => {
  return document.body.style.color = "white"
} 

export default App;
