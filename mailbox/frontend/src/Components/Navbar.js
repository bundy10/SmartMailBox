import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const navClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);



  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to='/' className="navbar-logo" onClick={closeMenu}>
          <span className='logo'><i className="fa-solid fa-cog fa-spin"></i></span>
        </Link>
        <div className="menu-icon" onClick = {navClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>
                Home
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/Picture' className='nav-links' onClick={closeMenu}>
                Picture
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/...' className='nav-links' onClick={closeMenu}>
                ....
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/....' className='nav-links' onClick={closeMenu}>
                ....
              </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar