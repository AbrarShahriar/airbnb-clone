import { FavoriteBorder, Star } from '@material-ui/icons'
import React from 'react'
import './SearchResult.css'
import { useMediaQuery } from '@material-ui/core'

function SearchResult({
    img,
    location,
    title,
    desc,
    star,
    price,
    total
}) {
    const isPhone = useMediaQuery('(max-width:800px)')

    return (
        <div className='searchResult'>
            <img src={img} alt=""/>

            {!isPhone &&
                <FavoriteBorder className='searchResult__heart' />
            }

            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p className="searchResult__infoTop__location">{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{desc}</p>
                    {isPhone &&
                        <FavoriteBorder className='searchResult__heart__phone' />
                    }
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <Star className='searchResult__star' />
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResult__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
