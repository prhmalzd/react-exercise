

const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>

function HumburgurMenu({toggleHumburger}) {


  return (
    <>
      <div className="humburgerMenu">
      <div className='humburgerMenuToggleIcon' onClick={toggleHumburger}>{closeIcon}</div>
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
