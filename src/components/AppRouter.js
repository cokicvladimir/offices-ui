import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './layouts/Header';
import ListView from './ListView';
import GridView from './GridView';

import NotFoundPage from './NotFoundPage';

class AppRouter extends Component{


    render(){
        return(
            <BrowserRouter>
                <div className='appRouter'>
                    <div className='main-panel'>
                        <Header />
                        <div className='content'>
                            <Switch>
                                <Route path="/" render={ () => <ListView />} exact={true}/>
                                <Route path="/grid" render={ () => <GridView />} />
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