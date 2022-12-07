import React from 'react';

export default function ProductCard(props) {
  const [addedToCart, setAddedToCart] = React.useState(false);

 
  function addToCart() {
    setAddedToCart((prevValue) => !prevValue);
  }

  return (
      <section className="flex-col flex-row card">
        <img src={props.img} alt="" className="image" />
        {/* <div className="image">&nbsp;</div> */}
        <div className="desc">
          <p className="headline">{props.item}</p>
          <h1>{props.product}</h1>
          <p>{props.desc}</p>
          <div className="fiscal">
            <span className="price">{props.price}</span>
            <span className="discount">{props.prevPrice}</span>
          </div>
          <div className="addToCart">
            <button href="" className="button" onClick={addToCart} >
              {addedToCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </section>
  );
}
