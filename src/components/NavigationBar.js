import React, { Component } from 'react'
import { Link } from 'react-router'
import Logo from './images/Logo.png'

class NavigationBar extends Component {
    render () {
        return (
            <div className="NavigationBar">
                <div className='NavigationBar-toolbar'>
                    <div className='NavigationBar-toolbarItem'>
                        <Link to="/" className="NavigationBar-logo">
                            <img src={Logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className='NavigationBar-toolbarItem'>
                        <label className='NavigationBar-menuIcon'>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </label>
                        <div className="NavigationBar-menuClose">X</div>
                    </div>
                </div>
                <input className='NavigationBar-checkbox' id='NavigationBar-checkbox' type='checkbox'/>
                <ul className="NavigationBar-menu">
                    <li className="menu-item"><Link to="/dota" activeClassName="menuItem--active">DOTA</Link></li>
                    <li className="menu-item"><Link to="/csgo" activeClassName="menuItem--active">CSGO</Link></li>
                    <li className="menu-item"><Link to="/sports" activeClassName="menuItem--active">SPORTS</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar