import ProductsContainer from './Components/ProductsContainer'
import ProductsOptions from './Components/ProductsOptionsToShow'
import ProductsPagination from './Components/ProductsPagination'
import './Products.css'

function Products({changeQuery , products , pages , loading , error}) {

  return (
    <div className='Products'>
        <ProductsOptions changeQuery={changeQuery}/>
        <ProductsContainer products={products} loading={loading} error={error}/>
        <ProductsPagination changeQuery={changeQuery} pages={pages}/>
    </div>
  )
}

export default Products
