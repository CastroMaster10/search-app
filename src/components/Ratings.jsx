import React, { useState } from 'react';
import {IoIosStar, IoIosStarOutline} from 'react-icons/io';

const Product = (props) => {

    const styles = {
       starStyles: {
    color:"orange"
       }    
    }      

    const [rating,setRating] = useState(props.rating) // rating represents the current state and setRating represents the state that'll be displayed

    return (
      <div style= {styles.starStyles} >
        <h1>Rating: {props.rating}</h1>
        {rating >= 1 ? (
          <IoIosStar onClick={() => setRating(1)} />
        ) : (
          <IoIosStarOutline onClick={() => setRating(1)} />
        )}
        {rating >= 2 ? (
          <IoIosStar onClick={() => setRating(2)} />
        ) : (
          <IoIosStarOutline onClick={() => setRating(2)} />
        )}
        {rating >= 3 ? (
          <IoIosStar onClick={() => setRating(3)} />
        ) : (
          <IoIosStarOutline onClick={() => setRating(3)} />
        )}
        {rating >= 4 ? (
          <IoIosStar onClick={() => setRating(4)} />
        ) : (
          <IoIosStarOutline onClick={() => setRating(4)} />
        )}
        {rating >= 5 ? (
          <IoIosStar onClick={() => setRating(5)} />
        ) : (
          <IoIosStarOutline onClick={() => setRating(5)} />
        )}
        {props.numOfReviews}
      </div>
    );
}

export default Product;