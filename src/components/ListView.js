import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import ReadMoreReact from 'read-more-react';


/*
Read first review notes in GridView:

1. Reuse CustomLoading component
2. Reuse Avatar component
3. Apply ellipsis approach for truncating text instead of 3rd party ReadMoreText
4. Remove console log



 */

const ListView = (props)=>{

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
            {props.offices.map( office => (
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
                            <h3 className='office-name'>{office.name}</h3>
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
    );
}


export default ListView;
