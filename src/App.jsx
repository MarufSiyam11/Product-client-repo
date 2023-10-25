
import { useLoaderData } from 'react-router-dom'
import './App.css'
import ProductCard from './ProductCard';
import { useState } from 'react';
import Slider from './components/Slider';

function App() {


  const loadedProducts = useLoaderData();

const [products, setProducts] = useState(loadedProducts);
  return (
    <div>
 <Slider></Slider>

      <h1 className='text-6xl text-center p-10'>Total Products : {products.length}</h1>
      <div className="grid  md:grid-cols-2">
  {
    products.map(product => <ProductCard
    key={product._id}
    product={product}
    products={products}
    setProducts={setProducts}

    >

    </ProductCard>)
    
  }
   </div>
    </div>
  )
}

export default App
