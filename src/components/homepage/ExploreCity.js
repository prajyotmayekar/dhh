import React from 'react'

function ExploreCity(props) {
    return (
        <div>
            <div className="title_container">
                <h2>{props.title}</h2>
            </div>
            <div className="propGrid_continer">
                <div className="exploreCity_itemCont">
                    <div className="explore_topCont">
                        <div className="explore_leftInfo">
                            78 Properties
                        </div>
                        <div className="explore_rightInfo">
                            From <b>$117</b> per night
                        </div>
                    </div>

                    <img src="/explore-images/explore-image1.jpg" className="exploreImage"/>

                    <div className="explore_bottomCont">
                        <div className="explore_title">
                            <h2>Meet a sunrise at Deira</h2>
                        </div>
                        <div className="explore_subTitle">
                            Separated they live in Bookmarkgrove right at the coaasr of the Semantics, a large language ocean
                        </div>
                    </div>
                </div>
                <div className="exploreCity_itemCont">
                    <div className="explore_topCont">
                        <div className="explore_leftInfo">
                            78 Properties
                        </div>
                        <div className="explore_rightInfo">
                            From <b>$117</b> per night
                        </div>
                    </div>

                    <img src="/explore-images/explore-image2.jpg" className="exploreImage" />

                    <div className="explore_bottomCont">
                        <div className="explore_title">
                            <h2>Welcome to Palm Jumeirah</h2>
                        </div>
                        <div className="explore_subTitle">
                            Separated they live in Bookmarkgrove right at the coaasr of the Semantics, a large language ocean
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreCity
