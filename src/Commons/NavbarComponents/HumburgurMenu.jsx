

function HumburgurMenu({toggleHumburger}) {


  return (
    <>
      <div className="humburgerMenu">
      <div className='humburgerMenuToggleIcon' onClick={toggleHumburger}></div>
        <span>Home</span>
        <span>About us</span>
        <span>Categories</span>
        <span>Blog</span>
        <button>Login / Signup</button>
      </div>
    </>
  )
}

export default HumburgurMenu
