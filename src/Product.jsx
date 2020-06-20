import React from 'react';




const Product = () => {

    const products = ["Soap", "Watermelon", "Sugar"]
    const listProducts = products.map((product) => {
        return <li key = {product.toString()}>{product}</li>
    })
  

    return(
        <div>
            <ul>
                {listProducts}
            </ul>
        </div>
    )
}

export default Product;