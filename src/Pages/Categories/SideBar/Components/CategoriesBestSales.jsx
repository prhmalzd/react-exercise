
import ProductInRow from '../../../../Commons/ProductFaces/productInRow'
import './SideBarComponents.css'

function CategoriesBestSales({products}) {

  return (
    <div className='categoriesBestSales'>
        <ProductInRow info={products[0]}/>
        <ProductInRow info={products[1]}/>
        <ProductInRow info={products[2]}/>
    </div>
  )
}

export default CategoriesBestSales
