import { useState } from 'react'
import './Categories.css'
import Products from './Producs/Products'
import Sidebar from './SideBar/Sidebar'
import Overlay from '../../Commons/Overlay'
import SidebarModale from '../Categories/SideBar/SidebarModale'

function Categories({passData , changeQuery , products , pages , loading , error , width}) {
  const [filterShown , setFilterShown] = useState(false)

  function closeOverlay () {
    setFilterShown(false)
  }

  function openFiltersSection() {
    setFilterShown(true)
  }

  return (
    <div className='Categories'>
        <div className='wrapper'>
            {(filterShown && width < 665) && <Overlay closeOverlay={closeOverlay}><SidebarModale changeQuery={changeQuery} products={products}/></Overlay>}
            {width > 665 && <Sidebar changeQuery={changeQuery} products={products}/>}
            <Products passData={passData} changeQuery={changeQuery} products={products} pages={pages} loading={loading} error={error} openFiltersSection={openFiltersSection}/>
        </div>
    </div>
  )
}

export default Categories
