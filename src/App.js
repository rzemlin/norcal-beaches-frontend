import React, {useState, useEffect}from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import BeachForm from './components/BeachForm';
import BeachContainer from './components/BeachContainer'
import BeachEditForm from './components/BeachEditForm'
//import beachData from './beachData'

const App = () => {
  const [beaches, setBeaches] = useState([]);
  const [beachId, setBeachId] = [useState(null)];

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/beaches")
      .then((resp) => resp.json())
      .then((beaches) => setBeaches(beaches));
  }, []);
  
  const onAddBeach = (newBeach) => {
    setBeachId((beaches) => [...beaches, newBeach]);
  };
  
  const onUpdateBeach = (alteredBeach) => {
    const updatedBeach = beaches.map((beach) => {
      if (beach.id === alteredBeach.id) {
        return alteredBeach;
      } else {
        return beach;
      }
    });
    setBeaches(alteredBeach);
  };

  const onDeleteBeach = (deletedBeach) => {
    const updatedBeaches = beaches.filter(
      (beach) => beach.id !== deletedBeach.id
    );
    setBeaches(updatedBeaches);
  };

  
  return (
    <div className="App">
        <Header />
        <BeachContainer beaches={beaches} onDeleteBeach={onDeleteBeach}/>
        <BeachEditForm onUpdateBeach={onUpdateBeach}/>
        <BeachForm onAddBeach={onAddBeach}/>
        </div>
    );
  }


export default App;



// props are passed in when rendering a component