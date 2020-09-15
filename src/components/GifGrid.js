import React, {Fragment} from 'react';
import { useFetchGifs } from './hooks/useFechGifs';
import { GifGridItem } from './GifGridItem';




export const GifGrid = ({category}) => {

     const {data:images, loading}  = useFetchGifs(category);

    return (
        <Fragment>
        <h3>{category}</h3>

        {loading ? <p>Loading</p>: null}
        <div className="card-grid">
            <ol>

                {
                    images.map(img => (
                    <GifGridItem 
                        key = {img.id}
                        {... img}
                         ></GifGridItem>
                    ))
                    }
            </ol>
            
        </div>
        </Fragment>
    )
}
