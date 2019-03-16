import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import ReadMoreReact from 'read-more-react';

const GridView = (props)=>{

    if (props.offices.length === 0) {
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
                    {props.offices.map( office => (
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

export default GridView;









