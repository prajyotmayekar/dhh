import React, { useState, useEffect } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

import PropertiesGridItem from './PropertiesGridItem'

import {get_JWT_token} from '../../utils/utils.js'

import { useJwt } from "react-jwt";

function PropertiesGrid(props) {
    const [propData,setPropData] = useState('');
    var JWT_token = reactLocalStorage.get('JWT-token');
   // const {isExpired } = useJwt(JWT_token);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_DOMAIN+"homepage-properties"+"/"+props.prop_cat,{
            headers: new Headers({
                'Authorization': 'bearer '+JWT_token, 
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
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
                        <PropertiesGridItem propData={propData} smaller_boxes={props.smaller_boxes}/>
                    :
                    <p>Loading data please wait...</p>
                }
            </div>
        </div>
    )
}

export default PropertiesGrid
