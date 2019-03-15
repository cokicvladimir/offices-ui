import React, {Component} from 'react';
import officesAPI from '../api/offices';
import PulseLoader from 'react-spinners/PulseLoader';


class ListView extends Component{
    constructor(props){
        super(props);
        this.state = {
            officesList: []
        }
    }

    componentDidMount(){
        this.fetchOffices();

    }

    fetchOffices = async ()=>{
        const offices = await officesAPI.get('/offices');
        this.setState({ officesList: offices.data });
    };

    renderData = () => {
        if (this.state.officesList.length === 0) {
            console.log("NO DATA");
            return (
                <div className='loading-bar'>
                    <PulseLoader
                        sizeUnit={'px'}
                        size={15}
                        margin={'8px'}
                        color={'#00b5b5'}
                        loading={true}
                    />
                </div>
            );

        }


        return(
            <div className='list-view'>
                {this.state.officesList.map( office => (
                    <div key={office.id} className='row list-view-row'>
                        <div className='image-column'>
                            {
                                office.photo === null ?
                                    (<div className='image'><span>{office.name.charAt(0).toUpperCase()}</span></div>) :
                                (<div className='image'><img src={office.photo} alt={office.name}/></div>)
                            }
                        </div>
                        <div className='column description-column'>
                            <div className='office-description'>
                                <h4>{office.name}</h4>
                                <p>{office.description}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        );
    };

    render(){
        return this.renderData();
    }

};

export default ListView;