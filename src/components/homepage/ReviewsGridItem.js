import React, { useState } from 'react';

import ReviewWidget from '../ReviewWidget'

function ReviewsGridItem(props) {
    const [displayCount,setDisplayCount] = useState(4);
    const reviewData = props.reviewData;

    function updateDisplayCount(){
        if(displayCount == reviewData.length){
            setDisplayCount(4);
        }else{
            setDisplayCount(reviewData.length);
        }
    }

    return (
        <React.Fragment>
            {reviewData.slice(0,displayCount).map(item => (
                <div className="reviewsGird_itemCont">
                    <div className="reviewGird_item">
                        <div className="revier_imageCont">
                            <img src={"/review-images/"+item.reviewr_image} className="revier_image" />
                        </div>
                        <div className="revier_details">
                            <h4>{item.reviewr_name}</h4>
                            <div>{item.reviewr_date}</div>
                            <div><b>{item.review_place}</b></div>
                        </div>
                        <div className="revier_star">
                           <ReviewWidget review_stars={item.review_stars} total_reviews={item.total_reviews} />
                        </div>
                        <div className="review_text">
                            Reviews to come here, Reviews to come here Reviews to come here, Reviews to come here, Reviews to come here, Reviews to come here, Reviews to come here, Reviews to come here, Reviews to come here
                        </div>
                    </div>
                </div>
        
            ))}

            <div className="cboth"></div>
            <div className="exploreAll_container"> 
                <button className="exploreBtn" onClick={updateDisplayCount}>
                    {displayCount == 4? 
                        <div>
                            Show Other
                        </div> 
                        :
                    <span>Show less</span>}
                </button>
            </div>
            <div className="cboth"></div>
            </React.Fragment>
    )
}

export default ReviewsGridItem
