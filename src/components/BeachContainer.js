import React from 'react'
import BeachCard from './BeachCard'

function BeachContainer({beaches}) {
    const beachCardItems = beaches.map((beach) => <BeachCard {...beach} key={beach.id}/> )
    return (
        <section>
            <h2>beaches</h2>
            <div className="filter">
                <button>All</button>
                <button>Marin</button>
                <button>Sonoma</button>
                <button>Mendocino</button>
                <button>Humboldt</button>
            </div>
            <input type="text" placeholder="Search..." />
            <ul className="cards">{beachCardItems}</ul>
        </section>
    )
}

export default BeachContainer
