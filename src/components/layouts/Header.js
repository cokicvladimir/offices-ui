import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

/*
 1. Instead of exact={true} you can mark some link as exact by adding only `exact` without TRUE value
 2. instead of harcoding links you can map array of desired nav items something like this:
    define navitems variable before definition of Header component
    const navItems = [{url: '/', name: 'List'}, {url: '/grid', name: 'Grid'}];
    then:
    {
        navItems.map(item  => {
            return (
                <NavLink key={url.name} to={item.url} activeClassName='is-active' exact>
                   <span>{url.name}</span>
               </NavLink>
            );
        })
    }


  3. If you want to have access to router related props you need to wrap Header component with withRouter HoC from react-router package.
 */

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


