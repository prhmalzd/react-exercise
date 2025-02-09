import './ProductsComponents.css'

function ProductsOptions({changeQuery}) {

  function changeTheLimitationProducts (e) {
    Array.from(e.target.options).map((option) => {
      if (option.selected) changeQuery({limit : option.innerText})
    })
  }

  return (
    <div className='ProductsOptions'>
        <select onClick={changeTheLimitationProducts} name='howtoshow'>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
        </select>
        <div>
            <span>&</span>
            <span>#</span>
        </div>
    </div>
  )
}

export default ProductsOptions
