
import { useEffect, useState } from 'react'
import './ProductVerticaly.css'
import useStorage from '../../Functionality/useStorage'

function ProductVerticaly({info}) {
  const [amount , setAmount] = useState(0)

  const {data} = useStorage(info , amount)

  useEffect(() => {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products' , '{}')
    }
  } , [])

  function decreaseAmount () {
    if (amount > 0) setAmount(amount => amount-1)
  }
  function increaseAmount () {
    setAmount(amount => amount+1)
  }
  function removeAmount () {
    setAmount(0)
  }

  return (
    <div className='ProductVerticaly'>
        <img src={info.images[0]} width='100px'/>
        <div className='productInfo'>
            <span className='title'>{info.name}</span>
            <span className='desc'>{info.description}</span>
            <span className='price'>{Math.floor(info.price)}</span>
        </div>
        <div className='addToCartSection'>
          <div className='plusMinus'>
            <button onClick={decreaseAmount}>-</button>
            <span>{amount}</span>
            <button onClick={increaseAmount}>+</button>
          </div>
          {amount > 0 && <button onClick={removeAmount} className='removeBtn'>Remove</button>}
        </div>
    </div>
  )
}

export default ProductVerticaly
