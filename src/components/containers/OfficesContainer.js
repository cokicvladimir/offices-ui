import React from 'react';
import {Route, Switch} from "react-router-dom";
import ListView from "../ListView";
import GridView from "../GridView";
import NotFoundPage from "../NotFoundPage";

const OfficesContainer = ({offices})=>{

    return(
        <div className='content'>
            <Switch>
                <Route path="/" render={ () => <ListView offices={offices} />} exact/>
                <Route path="/grid" render={ () => <GridView offices={offices} />} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
};

export default OfficesContainer;









