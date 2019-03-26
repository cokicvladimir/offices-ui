import React from 'react';
import CustomLoader from './CustomLoader';
import Avatar from './Avatar';

function ListView({offices}){

    if (offices.length === 0) {
        return (
            <CustomLoader/>
        );
    }

    return(
        <div className='view'>
            {offices.map( office => (
                <div key={office.id} className='row list-view-row'>
                    <div className='image-column'>
                        <Avatar office={office}/>
                    </div>
                    <div className='column description-column'>
                        <div className='office-description'>
                            <h3 className='office-name'>{office.name}</h3>
                            <span className='truncate'>{office.description}</span>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default ListView;