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
  function removeSearchContent () {
    setInputSearchValue('')
    changeQuery({search : ''})
  }

  return (
    <div className='searchBarContainer'>
      <input className='searchInput' type='text' placeholder='search ...' value={inputSearchValue} onInput={changeInputSearchValue}/>
      {inputSearchValue && <span className='removeSearchContentIcon' onClick={removeSearchContent}>X</span>}
    </div>
  )
}

export default NavbarSearch
