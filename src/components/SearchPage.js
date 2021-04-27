import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <p>62 stays - 26 August t0 30 August - 2 guest</p>
                <h1>Stays Nearby</h1>

                <Button variant='outlined'>Cancelaltion flexibilty</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>
            </div>

            <SearchResult 
                img='https://a0.muscache.com/im/pictures/1798b0e1-ede9-4cea-a5ad-01cfa0872fe9.jpg?im_w=720'
                location='Huntington, Vermont, United States'
                title='The Barn at Fielder Farm'
                desc='Relax in our post-and-beam, monitor barn home. Everything you need to make our home your home is provided.'
                star={4.95}
                price='$500/ night'
                total='$1500/ night'
            />
            <SearchResult 
                img='https://a0.muscache.com/im/pictures/ef661a2f-2a40-4947-8843-2ce54341514f.jpg?im_w=720'
                location='Dexter, Michigan, United States'
                title='Stay on a charming 250-acre working farm!'
                desc='Stay in a lovely restored farmhouse on 250+ acres of land in Dexter, MI.'
                star={4.98}
                price='$300/ night'
                total='$900/ night'
            />
            <SearchResult 
                img='https://a0.muscache.com/im/pictures/17f47a80-d288-4a94-a758-16cfe6705511.jpg?im_w=720'
                location='Robertsbridge, England, United Kingdom'
                title='The Stables at Udiam Farm'
                desc='Udiam Farm is set in 20 acres of beautiful Sussex countryside and was formerly the Guinness hop farm.'
                star={4.98}
                price='$347/ night'
                total='$347/ night'
            />
            <SearchResult 
                img='https://a0.muscache.com/im/pictures/3e875b7b-2a96-4f36-a931-bbb824add8c7.jpg?im_w=720'
                location='Wolseley, Western Cape, South Africa'
                title='Orchard Stay'
                desc='Stay in a lovely restored farmhouse on 250+ acres of land in Dexter, MI.'
                star={4.96}
                price='$143/ night'
                total='$143/ night'
            />
            <SearchResult 
                img='https://a0.muscache.com/im/pictures/miso/Hosting-44403770/original/3c267e60-7c19-40f0-92c6-960144107e6c.png?im_w=720'
                location='Joshua Tree, California, United States'
                title='Wonderlust Airstream'
                desc='Desert mountain views, stunning sunrises, breathtaking sunsets, rabbits hopping around the yard, coyotes howling at night.'
                star={4.97}
                price='$352/ night'
                total='$352/ night'
            />
            <SearchResult 
                img='https://a0.muscache.com/im/pictures/f09e6582-55cb-4ff7-92ee-6a47b0e713d2.jpg?im_w=720'
                location='Cornwall, United Kingdom'
                title='Safari Lodge at Coastal Valley Camp and Crafts'
                desc='This is luxury Glamping at the highest level. A definite WOW factor. 13x5m. (bigger than static caravans!) It is really a canvas home. 3 bedroom, 2 arm chairs, dining table.'
                star={5.0}
                price='$202/ night'
                total='$202/ night'
            />
        </div>
    )
}

export default SearchPage
