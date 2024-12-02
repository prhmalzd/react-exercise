import './ProductCard.css'

function ProductCard ({info}) {

    return (
        <div className='product'>
            <img className='product-img' src={info.images[0]}/>
            <div className='product-info'>
              <span className='product-category'>{info.category.name}</span>
              <span className='product-name'>{info.name}</span>
              <span className='product-price'>{Math.floor(info.price)}</span>
              <span className='product-rating'></span>
            </div>
            <div className='product-icons'>
              <div className='icon'></div>
              <div className='icon'></div>
              <div className='icon'></div>
            </div>
        </div>
    )
}

export default ProductCard