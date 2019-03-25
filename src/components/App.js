import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './layouts/Header';
import OfficesContainer from './containers/OfficesContainer';
import officesAPI from "../api/http";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offices: []
        }
    }

    componentDidMount() {
        this.fetchOffices();
    }

    fetchOffices = async () => {
        const offices = await officesAPI.get('/offices');
        this.setState({offices: offices.data});
    };

    render() {
        let {offices} = this.state;
        return (
            <div className="App">
                <BrowserRouter>
                    <div className='main'>
                        <Header/>
                        <OfficesContainer offices={offices}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
