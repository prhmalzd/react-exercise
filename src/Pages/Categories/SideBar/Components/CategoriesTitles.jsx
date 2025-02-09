
import { useState } from 'react'
import './SideBarComponents.css'

function CategoriesTitles({changeQuery, data}) {
  const [cateId , setCateId] = useState('')

  function onClickHandler (e) {
    changeQuery({category : e.target.id})
    setCateId(e.target.id)
  }

  return (
    <div className='categoriesTitles' onClick={onClickHandler}>
        <span className={cateId == '' ? 'active' : 'deactive'}>All Categories</span>
        {
          data.map((cate) => {
            return <span key={cate._id} id={cate._id} className={cateId == cate._id ? 'active' : 'deactive'}>{cate.name}</span>
          })
        }
    </div>
  )
}

export default CategoriesTitles
