import './ProductsComponents.css'

function ProductsOptions({changeQuery , pages , openFiltersSection}) {

  function changeTheLimitationProducts (e) {
    Array.from(e.target.options).map((option) => {
      if (option.selected) changeQuery({limit : option.innerText})
    })
  }

  function onFilteButtonClicked () {
    openFiltersSection()
  }

  return (
    <div className='ProductsOptions'>
        {
        pages > 1 ? <select onClick={changeTheLimitationProducts} name='howtoshow' className='selectGrid'>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
        </select>
        :
        <button className='openFilters' onClick={onFilteButtonClicked}>Filters</button>
        }
    </div>
  )
}

export default ProductsOptions
