import React, { useState } from 'react'
import { FaPencilAlt, FaTrash } from "react-icons/fa";


const BeachCard = ({ beach, onDeleteBeach }) => {
    const { id, name, location, description, img_url } = beach;
  
    const handleDeleteClick = () => {
        fetch(`http://localhost:4000/beaches/${id}`, {
            method: "DELETE",
    });
    onDeleteBeach(beach)
    .then((resp) => console.log(resp))
    .then(onDeleteBeach(beach));

    };
  
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
            <button onClick={handleDeleteClick}>
              <FaTrash />
            </button>
          </div>
        </footer>
      </li>
    );
  };
  
  export default BeachCard;
