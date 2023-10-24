
import { useLoaderData } from 'react-router-dom'
import './App.css'
import ProductCard from './ProductCard';

function App() {


  const products = useLoaderData();
  return (
    <div>
 

      <h1 className='text-6xl text-center'>Total Products : {products.length}</h1>
      <div className="grid  md:grid-cols-2">
  {
    products.map(product => <ProductCard
    key={product._id}
    product={product}
    >

    </ProductCard>)
    
  }
   </div>
    </div>
  )
}

export default App
