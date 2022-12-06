import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductCard from './components/Card'

function App() {


  return (
    <div>

      <ProductCard
        img='./assets/images/image-product-desktop.jpg'
        product='games'
      ></ProductCard>

    </div>

  )
}

export default App
