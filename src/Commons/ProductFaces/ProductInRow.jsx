
import './ProductInRow.css'

function ProductInRow({info}) {

  return (
    <div className='ProductInRow'>
      {info && <>
      <img src={info.images[0]} width='80px'/>
        <div className='info'>
            <span className='title'>{info.name}</span>
            <span className='desc'>{info.description.split(' ').filter((word , index) => {if (index < 3) return word}).join(' ') + '...'}</span>
        </div>
      </>}
    </div>
  )
}

export default ProductInRow
