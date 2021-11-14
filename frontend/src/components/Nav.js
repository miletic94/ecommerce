import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <nav>
                <div className="navGrid">
                    <div className="dFlex alignCenter gapSm navigation">
                        <MenuIcon className="menuIcon hoverSecondary cursorPointer"/>
                        <Link to="/">
                            <div className="brand cursorPointer">
                                    amazona
                            </div>
                        </Link>
                    </div>
                    
                    <div className="dFlex alignCenter gapSm userAction justifySelfEnd">
                        <div className="fontSm hoverSecondary cursorPointer">
                            Sign In
                        </div>
                            <ShoppingCartIcon className="shoppingCart hoverSecondary cursorPointer" />
                    </div>
                </div> 
                <div className="searchBar dFlex alignCenter spaceBetween">
                    <input type="text" placeholder="Search Amazona" />
                    <button className="btnPrimary">
                        <SearchIcon className="searchIcon cursorPointer brightnessLower" />
                    </button>
                    
                </div>
            </nav>
        </div>
    )
}
