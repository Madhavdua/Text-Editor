import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    
    <nav className={`navbar bg-${props.mode} px-4 navbar-expand-lg` } >
  <div className="container-fluid" >
    {/* <Link className={`navbar-brand  text-${props.textMode}`}  to="/" >{props.title}</Link> */}
    <a className={`navbar-brand  text-${props.textMode}`}  href="/" >{props.title}</a>
    
<div className={`collapse navbar-collapse`} id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
        <li className="nav-item">

          {/* <Link className={`nav-link active text-${props.textMode}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.textMode}`} aria-current="page" to="/about">About</Link> */}
{/* same thing written below but using a tag instead of Link tag(removed router dom) */}

          <a className={`nav-link active text-${props.textMode}`} aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className={`nav-link active text-${props.textMode}`} aria-current="page" href="/about">About</a>

        </li> */}
      </ul>
      
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
  <label className={`form-check-label text-${props.textMode}`} htmlFor="flexSwitchCheckDefault ">Enable {props.textMode} mode</label>
</div>
  </div>
  </div>
</nav>
  )
}
Navbar.defaultProps={
    title:"Enter title",
}
Navbar.propTypes={
    title : PropTypes.string
};