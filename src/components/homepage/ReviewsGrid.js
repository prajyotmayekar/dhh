import React, { useState, useEffect } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

import ReviewsGridItem from './ReviewsGridItem'

import {get_JWT_token} from '../../utils/utils.js'

import { useJwt } from "react-jwt";

function PropertiesGrid() {
    const [reviewData,setReviewData] = useState('');

    var JWT_token = reactLocalStorage.get('JWT-token');
    // const {isExpired } = useJwt(JWT_token);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_DOMAIN+"reviews",{
            headers: new Headers({
                'Authorization': 'bearer '+JWT_token, 
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        .then(res => res.json())
        .then(
            (result) => {
                setReviewData(result.data);
                console.log(reviewData);
            },
            (error) => {
                
            }	
        )
	},[]);

    return (
        <div>
            <div className="title_container">
                <h2>Reviews of our guests</h2>
            </div>

            <div className="propGrid_continer">
                {
                    reviewData.length>0?
                        <ReviewsGridItem reviewData={reviewData}/>  
                    :
                    <p>Loading data please wait...</p>
                }
            </div>
        </div>
    )
}

export default PropertiesGrid
