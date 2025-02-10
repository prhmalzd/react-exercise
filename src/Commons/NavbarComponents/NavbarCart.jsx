import { useEffect, useState } from 'react'
import './NavbarComponents.css'

function NavbarCart({cartData}) {

  const [amount , setAmount] = useState(0)

  useEffect(()=> {
    let counter = 0
    for (let data in cartData) {
      let key = data
      let value = cartData[key]
      counter += value[1]
    }
    setAmount(counter)
  } , [cartData])

  return (
    <span className='cartIcon'>{amount}</span>
  )
}

export default NavbarCart
