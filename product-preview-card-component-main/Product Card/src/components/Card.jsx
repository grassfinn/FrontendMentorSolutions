import React from 'react';

export default function ProductCard(props) {
  const [count, setCount] = React.useState(0);

  const { image } = props;
  function increaseCount() {
    setCount((prevValue) => (prevValue += 1));
    console.log(count);
  }

  return (
    <section className="">
      <div className="flex-col flex-row card">
        {/* <img src={props.img} alt="" /> */}
        <div className="image">&nbsp;</div>
        <div className="desc">
          <p className="headline">perfume</p>
          <h1>{props.product}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            doloremque quo dolore iusto impedit maiores quidem autem similique
            culpa magnam blanditiis fugit, fugiat cumque ad voluptatem delectus
            ipsam itaque. Nihil!
          </p>
          <div className="fiscal">
            <span className="price">$149.99</span>
            <span className="discount">$169.99</span>
          </div>
          <div className="addToCart">
            <button href="" className="button" onClick={increaseCount}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
