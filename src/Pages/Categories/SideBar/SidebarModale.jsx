
import CategoriesPrices from './Components/CategoriesPrices'
import CategoriesTitles from './Components/CategoriesTitles'
import CategoriesBestSales from './Components/CategoriesBestSales'
import './Sidebar.css'
import useFetchProducts from '../../../Functionality/useFetch'

function SidebarModale({changeQuery , products}) {

  const {data , loading , error , pagination} = useFetchProducts('https://kaaryar-ecom.liara.run/v1/categories')

  return (
    <div className='SidebarModale'>
        <CategoriesTitles changeQuery={changeQuery} data={data}/>
        <CategoriesPrices/>
    </div>
  )
}

export default SidebarModale
