import React, { useState } from 'react'
import { FaPencilAlt, FaTrash } from "react-icons/fa";


const BeachCard = ({ beach, enterBeachEditModeFor }) => {
    const { id, name, location, description, img_url } = beach;
  
    const [clapCount, setClapCount] = useState(0);
  
    const handleClap = (clapCount) => setClapCount(clapCount + 1);
  
    const handleEditClick = () => {
      enterBeachEditModeFor(id);
    };
  
    const handleDeleteClick = () => {};
  
    return (
      <li className="card">
        <figure className="image">
          <img src={img_url} alt={name} />
          <button onClick={handleClap} className="claps">
            👏{clapCount}
          </button>
        </figure>
  
        <section className="details">
          <h4>{name}</h4>
          <p>{description}</p>
        
        </section>
  
        <footer className="extra">
          <span className="badge blue">Location {location}</span>
          <div className="manage">
            <button onClick={handleEditClick}>
              <FaPencilAlt />
            </button>
            <button onClick={handleDeleteClick}>
              <FaTrash />
            </button>
          </div>
        </footer>
      </li>
    );
  };
  
  export default BeachCard;
