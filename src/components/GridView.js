import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import ReadMoreReact from 'read-more-react';

/*
 1. You don't need 3rd party lib for truncating long text. It can be done using CSS Ellipsis (https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/)
 2. Remove console log in line 14.
 3. This deserve to be component

     <div className='card-image'>
        {
            office.photo === null ?
                (<div className='image'><span>{office.name.charAt(0).toUpperCase()}</span></div>) :
                (<div className='image'><img src={office.photo} alt={office.name}/></div>)
        }
    </div>

    New Pure component can be named Avatar and reused everywhere


 4. No inline styles and magic numbers for example
     <PulseLoader
        sizeUnit={'px'}
        size={15}
        margin={'8px'}
        color={'#00acc6'}
        loading={true}
    />
     can be replaced like this:

     const loaderConfig = {
         sizeUnit: 'px',
         size: 15,
         loading: true,
     };

     and use it like this:

     <PulseLoader {...loaderConfig} />

   5. If you are doing some customization on 3rd party lib like PulseLoader that deserve to be new component CustomLoader

 */

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









