import React from 'react'

function ReviewWidget(props) {
    let reviewArray = [];
    if(props.review_stars){
        for(let i=1;i<=5;i++){
            if(props.review_stars>=i){
                reviewArray[(i-1)] = 1;
            }else{
                reviewArray[(i-1)] = 0;
            }
        }
    }
    return (
        <React.Fragment>
            
            
            <div className="total_reviews">
                <div className="dot_saperator">.</div>
                {props.total_reviews}
            </div>

            <div className="review_starCont">
                {reviewArray.map(item => (
                    <React.Fragment>{item>0?<img src="./orange_star.svg" className="review_star"/>:<img src="./grey_star.svg" className="review_star" />}
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    )
}

export default ReviewWidget
