import ProductsContainer from './Components/ProductsContainer'
import ProductsOptions from './Components/ProductsOptionsToShow'
import ProductsPagination from './Components/ProductsPagination'
import './Products.css'

function Products({products , pages , loading , error}) {

  return (
    <div className='Products'>
        <ProductsOptions/>
        <ProductsContainer products={products} loading={loading} error={error}/>
        <ProductsPagination pages={pages}/>
    </div>
  )
}

export default Products
