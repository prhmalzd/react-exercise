
import './ProductVerticaly.css'

function ProductVerticaly({info}) {

  return (
    <div className='ProductVerticaly'>
        <img src={info.images[0]} width='100px'/>
        <div>
            <span className='title'>{info.name}</span>
            <span className='desc'>{info.description}</span>
            <span className='price'>{info.price}</span>
        </div>
        <button>Add to Cart!</button>
    </div>
  )
}

export default ProductVerticaly
