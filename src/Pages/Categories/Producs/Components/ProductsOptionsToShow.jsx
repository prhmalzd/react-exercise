import './ProductsComponents.css'

function ProductsOptions() {

  return (
    <div className='ProductsOptions'>
        <select name='howtoshow'>
            <option>10</option>
            <option>20</option>
        </select>
        <div>
            <span>&</span>
            <span>#</span>
        </div>
    </div>
  )
}

export default ProductsOptions
