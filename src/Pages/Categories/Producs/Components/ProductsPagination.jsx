import { useState } from 'react'
import './ProductsComponents.css'

function ProductsPagination({changeQuery , pages}) {
  const [pageNumber , setPageNumber] = useState(1)

  function changePage (e) {
    setPageNumber(e.target.innerText)
    changeQuery({page : e.target.innerText})
  }
  return (
    <div className='ProductsPagination'>
      {Array.from({length : pages}).map((page , index) => {
        return <span onClick={changePage} className={pageNumber == index+1 ? 'active' : 'deactive'} key={index+'page'}>{index + 1}</span>
      })}
    </div>
  )
}

export default ProductsPagination
