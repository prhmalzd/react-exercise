
import './SideBarComponents.css'

function CategoriesPrices() {

  return (
    <div className='categoriesPrices'>
      <div>
        <input type='text' placeholder='min'/>
        <input type='text' placeholder='max'/>
      </div>
        <button>Filter</button>
    </div>
  )
}

export default CategoriesPrices
