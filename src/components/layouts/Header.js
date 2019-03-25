import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


const navItems = [{url: '/', name: 'List'}, {url: '/grid', name: 'Grid'}];

class Header extends Component{

    render(){
        return(
            <div className='row header'>
                <div className='logo'>
                    <NavLink to='/' activeClassName='is-active' exact>
                        <h1>Offices</h1>
                    </NavLink>

                </div>
                <div className='nav-list'>
                    {
                        navItems.map(item  => {
                            return (
                                <NavLink key={item.name} to={item.url} activeClassName='is-active' exact>
                                    <span>{item.name}</span>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Header;


