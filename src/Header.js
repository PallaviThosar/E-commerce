import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import logo from './Images/logo.png'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo'
        src={logo}/>
        </Link>
        <div className='header__search'>

            <input className='header__searchInput' type='text'/>
              {/*logo*/}
              <SearchIcon className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
          <Link to={!user && '/login'}>
           <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>Hello {!user ? 'User' : user.email }</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out':'Sign In'}</span>
            </div>
            </Link> 
            <Link to={'/orders'}>
           <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& orders</span>
           
          {/*  </div> 
           <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
  <span className='header__optionLineTwo'>Prime</span> */}
            </div> 
            </Link>
            
            <Link to= '/checkout'>
            <div className='header__optionBasket'>
            <ShoppingCartRoundedIcon/>
            <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header