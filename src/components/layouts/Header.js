import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <div className='row header'>
                <div className='logo'>
                    <h2>Offices</h2>
                </div>
                <div className='nav-list'>
                    <NavLink to='/' activeClassName='is-active' exact={true}>
                        List
                    </NavLink>
                    <NavLink to='/grid' activeClassName='is-active' exact={true}>
                        Grid
                    </NavLink>
                </div>
            </div>
        );
    }
}


export default Header;


