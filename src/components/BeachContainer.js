import BeachCard from './BeachCard';
import React, {useState} from 'react';


const BeachContainer = ({ beaches, onDeleteBeach }) => {
    
    const [searchQuery, setSearchQuery] = useState("");
  
    const searchResults = beaches.filter((beach) => {
    
      return beach.location.toLowerCase().includes(searchQuery.toLowerCase());
    });
  
    const filteredBeaches = searchResults.map((beach) => {
        return (
          <BeachCard
            key={beach.id}
            beach={beach}
            onDeleteBeach={onDeleteBeach}
          />
        );
      });
    
      const handleOnChange = (e) => setSearchQuery(e.target.value);

    return (
      <section>
        <h2>Nor*Cal Beaches</h2>

        <div className="filter">
          <button>All</button>
          <button>Marin</button>
          <button>Sonoma</button>
          <button>Mendocino</button>
          <button>Humboldt</button>
        </div>
        <input type="text" placeholder="Search..." onChange={handleOnChange} />
  
        <ul className="cards">{filteredBeaches}</ul>
      </section>
    );
  };
  
  export default BeachContainer;