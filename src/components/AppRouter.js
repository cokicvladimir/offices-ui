import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './layouts/Header';
import ListView from './ListView';
import GridView from './GridView';

import NotFoundPage from './NotFoundPage';
import officesAPI from "../api/offices";

/*

     1. This is statefull container so it should be places in containers or views dir.
      AppRouter is not good name for this component (For example can be named OfficesContainer).
      OfficeContainer can be use to wrap GridView and ListView to give them access to offices prop.
     2. App.js currently has no logic so please move BrowserRouter to App.js file.
     3. Don't repeat this.state.office you can use destructuring like this:
     const { offices } = this.state;
     4. instead of exact={true} you can add exact without value

 */

class AppRouter extends Component{
    constructor(props){
        super(props);
        this.state = {
            offices: []
        }
    }

    componentDidMount(){
        this.fetchOffices();
    }

    fetchOffices = async () => {
        const offices = await officesAPI.get('/offices');
        this.setState({ offices: offices.data });
    };

    render(){
        return(
            <BrowserRouter>
                <div className='appRouter'>
                    <div className='main-panel'>
                        <Header />
                        <div className='content'>
                            <Switch>
                                <Route path="/" render={ () => <ListView offices={this.state.offices} />} exact={true}/>
                                <Route path="/grid" render={ () => <GridView offices={this.state.offices} />} />
                                <Route component={NotFoundPage}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
