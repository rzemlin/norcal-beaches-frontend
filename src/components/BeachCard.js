import React, { useState } from 'react'
import { FaPencilAlt, FaTrash } from "react-icons/fa";


const BeachCard = ({ beach, onDeleteBeach }) => {
    const { id, name, location, description, img_url } = beach;
  
   
  
    return (
      <li className="card">
          <section className="details">
          <img>{img_url}</img>
          <h4>{name}</h4>
          <p>{description}</p>

         </section>
  
        <footer className="extra">
          <span className="badge blue">Location {location}</span>
          <div className="manage">
            <button>
              <FaPencilAlt />
            </button>
            <button >
              <FaTrash />
            </button>
          </div>
        </footer>
      </li>
    );
  };
  
  export default BeachCard;
