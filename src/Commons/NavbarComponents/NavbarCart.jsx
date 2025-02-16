import { useEffect, useState } from 'react'
import './NavbarComponents.css'

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22V6h4q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h4v16zm6-16h4q0-.825-.587-1.412T12 4t-1.412.588T10 6m-2 5h2V8H8zm6 0h2V8h-2z"/></svg>

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
    <>
      {cartIcon}
      <span className={`cartIcon ${amount == 0 ? 'deactivatecartIcon' : 'activatedcartIcon'}`}>{amount}</span>
    </>
  )
}

export default NavbarCart
