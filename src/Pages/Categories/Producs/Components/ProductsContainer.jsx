
import ProductVerticaly from '../../../../Commons/ProductFaces/ProductVerticaly'
import './ProductsComponents.css'

function ProductsContainer({passData, products , loading , error}) {

  return (
    <div className='ProductsContainer'>
      {loading && <span className='loading'>Loading...</span>}
      {error && <span className='error'>Something went wrong...</span>}
      {products.map((product) => {
        return <ProductVerticaly
          key={product._id}
          info={product}
          passData={passData}
        />
      })}
    </div>
  )
}

export default ProductsContainer
