import './Categories.css'
import Products from './Producs/Products'
import Sidebar from './SideBar/Sidebar'

function Categories({changeQuery , products , pages , loading , error}) {

  return (
    <div className='Categories'>
        <div className='wrapper'>
            <Sidebar changeQuery={changeQuery}/>
            <Products products={products} pages={pages} loading={loading} error={error}/>
        </div>
    </div>
  )
}

export default Categories
