import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import logo from './Images/logo.png'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  
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
          <Link to='/login'>
           <div className='header__option'>
            <span className='header__optionLineOne'>Hello user</span>
            <span className='header__optionLineTwo'>Sign In</span>
            </div>
            </Link> 
           <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& orders</span>
            
          {/*  </div> 
           <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
  <span className='header__optionLineTwo'>Prime</span> */}
            </div> 
            
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