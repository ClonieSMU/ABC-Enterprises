import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (

    <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar_logo"><a href="/">ABC ENTERPRISES</a></div>
                <div className="spacer"></div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">ABOUT</a></li>
                        <li><a href="/">NEWS</a></li>
                        <li><a href="/">COMPANY</a></li>
                        <li><a href="/">CONTACT</a></li>
                        <li><a href="/">JOIN OUR TEAM</a></li>
                    </ul>
                </div>
            </nav>
        </header>
);

export default toolbar;