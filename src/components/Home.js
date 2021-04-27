import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className="home__section">
                <Card 
                    src='https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720'
                    title='Outdoor getaways'
                    desc='Enjoy and thrive with nature.'
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720'
                    title='Unique stays'
                    desc='Spaces that are more than just a place to sleep.'
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720'
                    title='Entire Homes'
                    desc='Comfortable private spaces with room for family and friends.'
                />
            </div>

            <div className="home__section">
                <Card 
                    src='https://a0.muscache.com/im/pictures/3b466e61-61bf-4f54-a594-2c321bdc189b.jpg?im_w=720'
                    title='Earth Home'
                    desc='Entire floor for rent with 2 BR, a large living room,free wifi,large private garden.'
                    price='$25/ night'
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/48621b97-08ec-4d60-b9f5-8936aeeee93e.jpg?im_w=720'
                    title='The Other Side'
                    desc='This property has two rooms and one bathroom. The pricing mentioned is 1500 per person with breakfast.'
                    price='$20/ night'
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/8e3d5045-aa7e-46e1-a228-71fd2930112a.jpg?im_w=720'
                    title='Beach Campsite'
                    desc='A wonderful tourist spot to enjoy night camping with BBQ party & Camp-firing on beach.'
                    price='$90/ night'
                />
            </div>

        </div>
    )
}

export default Home
