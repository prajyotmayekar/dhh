import React, { useState } from 'react';

import ReviewWidget from '../ReviewWidget'

function PropertiesGridItem(props){
    if(props.smaller_boxes){
        var initialValue = 5;
    }else{
        var initialValue = 4; 
    }

    const [displayCount,setDisplayCount] = useState(initialValue);
    
    
    const propData = props.propData;

    function updateDisplayCount(){
        if(displayCount == propData.length){
            setDisplayCount(initialValue);
        }else{
            setDisplayCount(propData.length);
        }
    }

    return (
        <React.Fragment>
            {propData.slice(0,displayCount).map(item => (
                <div className={(props.smaller_boxes ? 'propGird_itemContSmall' : 'propGird_itemCont')}>
                    <div className="propGird_item">
                        <img src={"/rooms-images/"+item.image_name} className="prop_image"/>
                        <div className="propDesc">{item.prop_title}</div>
                        <div className="propLoc">{item.prop_loc}</div>
                        <div className="propPriceLeft">
                            from <b>{item.per_night}</b> per night
                        </div>
                        <div className="propReviewRight">
                            <ReviewWidget review_stars={item.review_stars} total_reviews={item.total_reviews}/>
                        </div>
                    </div>
                </div>
            ))}

            <div className="cboth"></div>
            <div className="exploreAll_container"> 
                <button className="exploreBtn" onClick={updateDisplayCount}>

                    {displayCount == initialValue? 
                        <div>
                            Explore All
                            <div className="total_rev">
                                {props.propData.length}
                            </div>
                        </div> 
                        :
                    <span>Show less</span>}
                </button>
            </div>
            <div className="cboth"></div>
        </React.Fragment>
    )
}

export default PropertiesGridItem
