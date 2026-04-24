import React from 'react';

const Product = ({product}) => {

    const {id,name,price,brand} = product;
    return (
        <div className="card w-96 bg-zinc-950 mt-10 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Brand: {brand}</p>
                <p>Price: ${price}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;