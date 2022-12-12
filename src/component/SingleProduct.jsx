import React from "react";

function SingleProduct({ product, cart, setCart }) {
  const { id, name, image, price } = product;

  return (
    <div className="products">
      <img src={image} alt="" />

      <div className="productdesc">
        <span>{name}</span>
        <h5>Rs {price}</h5>
      </div>

      {cart.includes(product) ? (
        <button
          className="btn"
          onClick={() => {
            setCart(cart.filter((item) => item.id !== product.id));
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            setCart([...cart, product]);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default SingleProduct;
