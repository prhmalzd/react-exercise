import { useEffect, useState } from "react"
import NavbarMobile from "./NavbarMobile"
import Navbar from "./Navbar"

function NavbarHandler({cartData , changeQuery , width}) {

  return (
    <>
      {width > 1200 ?
      <Navbar cartData={cartData} changeQuery={changeQuery}/>
      :
      <NavbarMobile cartData={cartData} changeQuery={changeQuery}/>
      }
    </>
  )
}

export default NavbarHandler
