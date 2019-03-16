import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <div className='row header'>
                <div className='logo'>
                    <NavLink to='/' activeClassName='is-active' exact={true}>
                        <h1>Offices</h1>
                    </NavLink>

                </div>
                <div className='nav-list'>
                    <NavLink to='/' activeClassName='is-active' exact={true}>
                        <span>List</span>
                    </NavLink>
                    <NavLink to='/grid' activeClassName='is-active' exact={true}>
                        <span>Grid</span>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Header;


