import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ProductCard from './components/Card';
import backgroundImage from './assets/images/image-product-desktop.jpg';

function App() {
  return (
    <div>
      <ProductCard
        item="perfume"
        img={backgroundImage}
        product="Gabirelle Essence Eau Du Parfume"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        price="149.99"
        prevPrice="169.99"
      ></ProductCard>
    </div>
  );
}

export default App;
