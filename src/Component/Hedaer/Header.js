import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="head">
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/">Gallery</NavLink></li>
                        <li><NavLink to="/addNewPost">Add New Post</NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;