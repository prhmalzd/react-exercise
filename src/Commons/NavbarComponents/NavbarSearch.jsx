import { useState } from 'react'
import './NavbarComponents.css'

let debounceTimer

function NavbarSearch({changeQuery}) {
  const [inputSearchValue , setInputSearchValue] = useState('')

  function changeInputSearchValue (e) {
    setInputSearchValue(e.target.value)
    debounce(e.target.value)
  }

  function debounce (text) {
    clearTimeout(debounceTimer)
    
    debounceTimer = setTimeout(() => {
      changeQuery({search : text})
    } , 800)
  }

  return (
    <div className='searchBarContainer'>
      <span className='searchIcon'>0</span>
      <input className='searchInput' type='text' placeholder='search ...' value={inputSearchValue} onInput={changeInputSearchValue}/>
    </div>
  )
}

export default NavbarSearch
