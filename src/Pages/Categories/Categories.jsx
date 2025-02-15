import './Categories.css'
import Products from './Producs/Products'
import Sidebar from './SideBar/Sidebar'

function Categories({passData , changeQuery , products , pages , loading , error , width}) {

  return (
    <div className='Categories'>
        <div className='wrapper'>
            {width > 665 && <Sidebar changeQuery={changeQuery} products={products}/>}
            <Products passData={passData} changeQuery={changeQuery} products={products} pages={pages} loading={loading} error={error}/>
        </div>
    </div>
  )
}

export default Categories
