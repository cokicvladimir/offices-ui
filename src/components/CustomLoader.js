import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

function CustomLoader(){

    const loaderConfig = {
        sizeUnit: 'px',
        size: 15,
        margin: '8px',
        color: '#00acc6',
        loading: true,
    };

    return(
        <div className='loading-bar'>
            <PulseLoader {...loaderConfig}/>
        </div>
    );
};

export default CustomLoader;









