import React from 'react'

function Banner() {
    return (
        <div id="banner_image">
            <div id="banner_title">
                <div className="full_width">
                    <h1>Book the best place in Dubai</h1>
                </div>
                <div className="full_width">
                    <span className="subTitle">From huge villas at the desert to hi-tech apartments at seaside</span>
                </div>
                <div id="search_widget">
                    <input type="text" name="search_district"  id="search_district" placeholder="District where you are looking for"/>
                    <input type="text" name="search_checkIn"  id="search_checkIn" placeholder="Check in"/>
                    <input type="text" name="search_checkOut"  id="search_checkOut" placeholder="Check in"/>
                    <input type="text" name="total_guests"  id="total_guests" placeholder="Check in"/>

                    <button id="search_button">Find a place</button>

                    <div id="search_linksCont">
                        <a href="" className="search_links">Jumeirah Lake Tower</a>
                        <a href="" className="search_links">Dubai Marina</a>
                        <a href="" className="search_links">Deira</a>
                        <a href="" className="search_links">Downtown</a>
                        <a href="" className="search_links">More</a>
                    </div>
                </div>
                
            </div>

            <div id="banner_btmTitle">
                324 options of cozy<br></br>places in Dubai
            </div>
        </div>
    )
}

export default Banner
