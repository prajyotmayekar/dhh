import React from 'react'

import PropertiesGrid from '../components/homepage/PropertiesGrid'
import FeatureBanner from '../components/homepage/FeatureBanner'
import ReviewsGrid from '../components/homepage/ReviewsGrid'
import ExploreCity from '../components/homepage/ExploreCity'
import Banner from '../components/homepage/Banner'

function Home() {
    return (
        <React.Fragment>
            <Banner/>
            <section>
                <PropertiesGrid title="Apartments on Seaside" prop_cat="1"/>
                <ExploreCity title="Explore the city"/>
                <PropertiesGrid title="Apartments on Seaside" prop_cat="2"/>
                <FeatureBanner/>
                <ReviewsGrid/>
                <PropertiesGrid title="Apartments on Seaside" prop_cat="3"/>
            </section>
        </React.Fragment> 
    )
}

export default Home
