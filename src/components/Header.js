import { Avatar, Input } from '@material-ui/core'
import { ExpandMore, Language, Search } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core'

function Header() {
    const isPhone = useMediaQuery('(max-width:500px)')
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__icon' src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""/>
            </Link>
            

            <div className="header__center">
                <input type='text' />
                <Search />
            </div>

            {!isPhone &&
            <div className="header__right">
                <p>Become a host</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
            }

        </div>
    )
}

export default Header
