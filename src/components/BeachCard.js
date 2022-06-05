import React from 'react'

function BeachCard({id, name, location, img_url, description}) {
    
    return (
        <div>
           <li>
               <figure>
                   <img src={img_url} alt={`${name}}`} />
               </figure>
               <article>
                   <h4>{name}</h4>
                   <p>{description}</p>
               </article>
           </li>
        </div>
    )
}

export default BeachCard
