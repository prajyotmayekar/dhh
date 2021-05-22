import React, { useState, useEffect } from 'react';

import PropertiesGridItem from './PropertiesGridItem'

function PropertiesGrid(props) {
    const [propData,setPropData] = useState('');
    useEffect(() => {
		fetch(process.env.REACT_APP_API_DOMAIN+"homepage-properties"+"/"+props.prop_cat)
		.then(res => res.json())
		.then(
			(result) => {
                setPropData(result.data);
			},
			(error) => {
                
			}	
		)
	},[]);

    return (
        <div>
            <div className="title_container">
                <h2>{props.title}</h2>
            </div>

            <div className="propGrid_continer">
                {
                    propData.length>0?
                        <PropertiesGridItem propData={propData}/>
                    :
                    <p>Loading data please wait...</p>
                }
            </div>
        </div>
    )
}

export default PropertiesGrid
