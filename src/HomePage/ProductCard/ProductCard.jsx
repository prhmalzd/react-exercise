import { setProduct } from '../../Test'
import './ProductCard.css'
import { useNavigate } from 'react-router'
import PropTypes from 'prop-types'
import { starIcon , unstarIcon } from '../../icons/Icons'
import { useEffect, useState } from 'react'

ProductCard.propTypes = {
  info : PropTypes.object,
  changeSearchText: PropTypes.func,
  changeCardAmount : PropTypes.func
}

function ProductCard ({info , changeSearchText , changeCardAmount}) {
  const [cartAmountValue , setCartAmountValue] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    let storagedInfo = JSON.parse(localStorage.getItem('items'))
    let allAmount = 0
    if (storagedInfo) {
      storagedInfo.forEach((item) => {
        if (item.info._id == info._id) {
          setCartAmountValue(item.amount)
        }
        allAmount += item.amount
      })
    }
    changeCardAmount(allAmount)
  }, [])

  function productClicked (event) {
    if (event.target.classList.contains('cart')) return
    navigate(`./product/${info._id}`)
    setProduct(info)
    changeSearchText('')
    console.log(info)
  }
  function addToCartClicked () {
    if (cartAmountValue == 0) return
    const productInfo = {amount : cartAmountValue , info}
    const items = JSON.parse(localStorage.getItem('items'))
    let allAmount = 0
    if (items) {
      let hasIt = false
      items.forEach((item) => {
        if (item.info._id === info._id) {
          item.amount = cartAmountValue
          hasIt = true
        }
        allAmount += item.amount
      })
      if (!hasIt) {
        items.push(productInfo)
        allAmount += cartAmountValue
      }
      localStorage.setItem('items' , JSON.stringify(items))
    }
    else {
      localStorage.setItem('items' , JSON.stringify([productInfo]))
      allAmount = cartAmountValue
    }

    changeCardAmount(allAmount)
  }
  function removeFromCartClicked () {
    const items = JSON.parse(localStorage.getItem('items'))
    if (!items) return
    let newItems
    let allAmount = 0
    items.forEach((item , index) => {
      if (item.info._id === info._id) {
        let first = items.slice(0 , index)
        let last = items.slice(index+1)
        newItems = first.concat(last)
      }
      else allAmount += item.amount
    })
    localStorage.setItem('items' , JSON.stringify(newItems))
    setCartAmountValue(0)
    changeCardAmount(allAmount)
  }

  function increaseCartAmount () {
    setCartAmountValue(cartAmountValue + 1)
  }

  function decreaseCartAmount () {
    if (cartAmountValue < 2) return
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
              <div className='cardButtonsContainer'>
                {cartAmountValue > 0 && <button className='product-removeCart-btn cart' onClick={removeFromCartClicked}>Remove</button>}
                <button className='product-addToCart-btn cart' onClick={addToCartClicked}>Add to Cart</button>
              </div>
            </div>
        </div>
    )
}

export default ProductCard