import React from 'react';


export const GifGridItem = ({id, title, url } ) => {

        console.log({id, title, url})

    return (
        <div className="animate__animated animate__headShake">
           <img src ={url.url} alt={title} />
           <p>{title}</p>
        </div>
    )
}
