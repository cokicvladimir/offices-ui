import React from 'react';
import CustomLoader from './CustomLoader';
import Avatar from "./Avatar";

function GridView({offices}){

    if (offices.length === 0) {
        return (
            <CustomLoader/>
        );
    }

    return(
        <div className='view'>
            <div className='margin-fix'>
                <div className='row grid-view'>
                    {offices.map( office => (
                        <div key={office.id} className='card'>
                            <div className='card-image'>
                                <Avatar office={office}/>
                            </div>
                            <div className='card-description'>
                                <h3 className='card-title'>{office.name}</h3>
                                <div className='card-text'>
                                    <span className='truncate'>{office.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GridView;









