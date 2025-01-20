import { setProduct } from '../../Test'
import './SearchResult.css'
import { useNavigate } from 'react-router'
import PropTypes from 'prop-types'

SearchResult.propTypes = {
  info : PropTypes.object
}

function SearchResult ({info , onProductClicked}) {

  const navigate = useNavigate()

  function productClicked () {
    onProductClicked()
    navigate(`./product/${info._id}`)
    setProduct(info)
  }

    return (
        <div className='searchResultProduct' onClick={productClicked}>
            <img className='searchResultProduct-img' src={info.images[0]}/>
            <div className='searchResultProduct-info'>
              <span className='searchResultProduct-category'>{info.category.name}</span>
              <span className='searchResultProduct-name'>{info.name}</span>
              <span className='searchResultProduct-price'>{Math.floor(info.price)}</span>
              <span className='searchResultProduct-rating'></span>
            </div>
            <div className='searchResultProduct-icons'>
              <div className='icon'></div>
              <div className='icon'></div>
              <div className='icon'></div>
            </div>
        </div>
    )
}

export default SearchResult