
import { useEffect, useState } from 'react'
import './ProductVerticaly.css'
import useStorage from '../../Functionality/useStorage'

function ProductVerticaly({info ,passData}) {

  const [amount , setAmount] = useState(null)

  const {data} = useStorage(info , amount)

  useEffect(() => {
    let storagedItems = localStorage.getItem('products')
    if (storagedItems == null) {
      localStorage.setItem('products' , '{}')
    }
    else {
      let items = JSON.parse(localStorage.getItem('products'))
      for (let item in items) {
        let key = item
        let value= items[key]
        console.log(key , value)
        if (key == info._id) {
          setAmount(value[1])
        }
      }
    }
  } , [])

  useEffect(() => {
    passData(data)
  } , [data])

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
        <img src={info.images[0]} width='200px'/>
        <div className='productInfo'>
            <span className='title'>{info.name}</span>
            <span className='desc'>{info.description}</span>
            <span className='price'>{Math.floor(info.price)}</span>
        </div>
        <div className='rating'>
          {Array.from({length : 5}).map((rate , index) => {
            return <span className={info.rating > index + 1 ? 'rate' : 'unrate'} key={index+'rate'}>*</span>
          })}
        </div>
        <div className='addToCartSection'>
          <div className='plusMinus'>
            <button onClick={decreaseAmount}>-</button>
            <span>{amount || 0}</span>
            <button onClick={increaseAmount}>+</button>
          </div>
          <button onClick={removeAmount} className={`removeBtn ${amount > 0 ? 'activated' : 'deactivated'}`}>Remove</button>
        </div>
    </div>
  )
}

export default ProductVerticaly
