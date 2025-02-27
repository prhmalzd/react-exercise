import ProductsContainer from './Components/ProductsContainer'
import ProductsOptions from './Components/ProductsOptionsToShow'
import ProductsPagination from './Components/ProductsPagination'
import './Products.css'

function Products({passData, changeQuery , products , pages , loading , error , openFiltersSection}) {

  return (
    <div className='Products'>
        <ProductsOptions changeQuery={changeQuery} pages={pages} openFiltersSection={openFiltersSection}/>
        <ProductsContainer passData={passData} products={products} loading={loading} error={error}/>
        {pages > 1 && <ProductsPagination changeQuery={changeQuery} pages={pages}/>}
    </div>
  )
}

export default Products
