import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from "@material-ui/core"
import gmail_logo from './assets/gmail_logo.jpg'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import { auth } from './firebase';
import {logout} from './features/counter/userSlice'

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }

    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={gmail_logo} alt="gmail_logo" />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder='Search mail' />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Header