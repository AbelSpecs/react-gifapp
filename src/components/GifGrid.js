import React /* {useState, useEffect} */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
/* import {getGifs} from '../helpers/getGifs'; */

export const GifGrid = ({category}) => {

    const {data: gifs, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <br />

            {loading && <p className= "animate__animated animate__flash">Loading...</p>}

            <div className= "card-grid">
                {
                    gifs.map(img => (
                        <GifGridItem 
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
