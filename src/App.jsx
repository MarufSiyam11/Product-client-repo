
import { useLoaderData } from 'react-router-dom'
import './App.css'
import ProductCard from './ProductCard';

function App() {


  const products = useLoaderData();
  return (
    <>
 

      <h1 className='text-6xl text-center'>Total Products : {products.length}</h1>
  {
    products.map(product => <ProductCard
    key={product._id}
    product={product}
    >

    </ProductCard>)
  }
    </>
  )
}

export default App
