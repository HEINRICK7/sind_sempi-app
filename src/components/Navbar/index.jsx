import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './style.css'

import { FiMenu, FiX, FiPower } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib'

import Logo from '../../assets/logo.svg'


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const history = useHistory();

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleLogout = () => {
    localStorage.clear();

    history.push('/')
  }

  return (
    <>
    <IconContext.Provider value={{color:' #00000'}}>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           <img src={Logo} alt="logo" style={{width: 150, height: 75}}/>
          </Link>
          <div className="menu_icon" onClick={handleClick}>
                {click ? <FiX /> : <FiMenu />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/cad_servidor' className='nav-links' onClick={closeMobileMenu}>
                Cadastrar Servidores
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/list_servidor'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Listar Servidores
              </Link>
            </li>
            <li className='nav-item_logount'>
              <button  className='nav-links_logount' type="button" onClick={()=> {handleLogout()}}><FiPower style={{marginLeft: 12,fontSize: 30}}/></button>
            </li>
          </ul>
        </div>
      </nav>
      </IconContext.Provider>   
    </>
  );
}

export default Navbar;
