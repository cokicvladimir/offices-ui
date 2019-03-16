import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './layouts/Header';
import ListView from './ListView';
import GridView from './GridView';

import NotFoundPage from './NotFoundPage';
import officesAPI from "../api/offices";

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