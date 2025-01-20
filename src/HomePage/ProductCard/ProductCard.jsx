import { setProduct } from '../../Test'
import './ProductCard.css'
import { useNavigate } from 'react-router'
import PropTypes from 'prop-types'
import { starIcon , unstarIcon } from '../../icons/Icons'
import { useEffect, useState } from 'react'

ProductCard.propTypes = {
  info : PropTypes.object,
  changeSearchText: PropTypes.func
}

function ProductCard ({info , changeSearchText}) {
  const [cartAmountValue , setCartAmountValue] = useState(1)

  const navigate = useNavigate()

  useEffect(() => {
    let storagedInfo = JSON.parse(localStorage.getItem(info._id))
    if (storagedInfo) {
      setCartAmountValue(storagedInfo.amount)
    }
  }, [])

  function productClicked (event) {
    if (event.target.classList.contains('cart')) return
    navigate(`./product/${info._id}`)
    setProduct(info)
    changeSearchText('')
    console.log(info)
  }
  function addToCartClicked () {
    const productInfo = {amount : cartAmountValue , info}
    localStorage.setItem(info._id , JSON.stringify(productInfo))
  }

  function increaseCartAmount () {
    setCartAmountValue(cartAmountValue + 1)
  }

  function decreaseCartAmount () {
    if (cartAmountValue == 1) return
    setCartAmountValue(cartAmountValue - 1)
  }

    return (
        <div className='product' onClick={productClicked}>
            <img className='product-img' src={info.images[0]}/>
            <div className='product-info'>
              <span className='product-category'>{info.category.name}</span>
              <span className='product-name'>{info.name}</span>
              <div className='product-price-container'>
                <span className='product-price'>{'$' + Math.floor(info.price)}</span>
                <span className='product-price-high'>{'$' + (Math.floor(info.price) + 40)}</span>
              </div>
              <div className='product-rating'>
                <div className='rating-line'></div>
                {1 < info.rating ? starIcon : unstarIcon}
                {2 < info.rating ? starIcon : unstarIcon}
                {3 < info.rating ? starIcon : unstarIcon}
                {4 < info.rating ? starIcon : unstarIcon}
                {5 < info.rating ? starIcon : unstarIcon}
                <div className='rating-line'></div>
              </div>
              <div className='product-icons'>
                <div className='icon'></div>
                <div className='icon'></div>
                <div className='icon'></div>
              </div>
            </div>
            <div className='addToCartSection cart'>
              <div className='addToCartAmount cart'>
                <button className='cart' onClick={decreaseCartAmount}>-</button>
                <span>{cartAmountValue}</span>
                <button className='cart' onClick={increaseCartAmount}>+</button>
              </div>
              <button className='product-addToCart-btn cart' onClick={addToCartClicked}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard