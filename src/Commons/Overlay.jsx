import './overlay.css'

function Overlay({children ,closeOverlay}) {

  function onClickOverlay (e) {
    if (e.target.id === 'overlay') {
       closeOverlay()
    }
  }

  return (
    <div className='Overlay' id='overlay' onClick={onClickOverlay}>
        {children}
    </div>
  )
}

export default Overlay
