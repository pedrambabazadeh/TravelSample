import React from 'react'
import './nav.css'
import LangModifier from '../language-modifier/LangModifier';

function Nav() {
  return (
<nav className="navbar row vertical-center">
    <div className='col md-10 under-md-30'>
      <LangModifier/>
    </div>
    <div className="col md-50 under-md-0">
        <ul className='nav-ul'>
        <li>Home</li>
        <li>Articles</li>
        <li>Destinations</li>
        <li>About us</li>
        </ul>
    </div>
    <div className="col md-50 under-md-50">
        <input type="search" placeholder="type your word"></input>
    </div>
</nav>
  )
}
export default Nav;