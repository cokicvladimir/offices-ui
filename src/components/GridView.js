import React, {Component} from 'react';
import officesAPI from '../api/offices';
import PulseLoader from 'react-spinners/PulseLoader';
import ReadMoreReact from 'read-more-react';


class GridView extends Component{
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
                        color={'#00acc6'}
                        loading={true}
                    />
                </div>
            );
        }
        return(
            <div className='view'>
                <div className='margin-fix'>
                    <div className='row grid-view'>
                        {this.state.officesList.map( office => (
                            <div key={office.id} className='card'>
                                <div className='card-image'>
                                    {
                                        office.photo === null ?
                                            (<div className='image'><span>{office.name.charAt(0).toUpperCase()}</span></div>) :
                                            (<div className='image'><img src={office.photo} alt={office.name}/></div>)
                                    }
                                </div>
                                <div className='card-description'>
                                    <h3 className='card-title'>{office.name}</h3>
                                    <div className='card-text'>
                                        <ReadMoreReact
                                            text={office.description}
                                            min={1}
                                            ideal={100}
                                            max={200}
                                            readMoreText='read more'
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    render(){
        return this.renderData();
    }

};

export default GridView;