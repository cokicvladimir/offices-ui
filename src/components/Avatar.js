import React from 'react';

function Avatar({office}){

    return(
        <div>
            {
                office.photo === null ?
                    (<div className='image'><span>{office.name.charAt(0).toUpperCase()}</span></div>) :
                    (<div className='image'><img src={office.photo} alt={office.name}/></div>)
            }
        </div>
    );
}

export default Avatar;









