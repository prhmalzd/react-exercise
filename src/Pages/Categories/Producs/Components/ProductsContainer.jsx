
import ProductVerticaly from '../../../../Commons/ProductFaces/ProductVerticaly'
import './ProductsComponents.css'

function ProductsContainer({products , loading , error}) {

  return (
    <div className='ProductsContainer'>
      {loading && <span className='loading'>Loading...</span>}
      {error && <span className='error'>Error...</span>}
      {products.map((product) => {
        return <ProductVerticaly
          key={product._id}
          info={product}
        />
      })}
    </div>
  )
}

export default ProductsContainer
