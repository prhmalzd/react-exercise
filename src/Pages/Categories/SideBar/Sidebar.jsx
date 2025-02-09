
import CategoriesPrices from './Components/CategoriesPrices'
import CategoriesTitles from './Components/CategoriesTitles'
import CategoriesBestSales from './Components/CategoriesBestSales'
import './Sidebar.css'
import useFetchProducts from '../../../Functionality/useFetch'

function Sidebar({changeQuery}) {

  const {data , loading , error , pagination} = useFetchProducts('https://kaaryar-ecom.liara.run/v1/categories')

  return (
    <div className='Sidebar'>
        <CategoriesTitles changeQuery={changeQuery} data={data}/>
        <CategoriesPrices/>
        <CategoriesBestSales/>
    </div>
  )
}

export default Sidebar
