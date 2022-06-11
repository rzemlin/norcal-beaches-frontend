import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import BeachForm from './components/BeachForm';
import BeachContainer from './components/BeachContainer'
import BeachEditForm from './components/BeachEditForm'

const App = () => {
  const [beaches, setBeaches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/beaches")
      .then((res) => res.json())
      .then((beaches) => setBeaches(beaches));
  }, []);
  
  return (
    <div className="App">
        <BeachContainer beaches={setBeaches} />
    </div>
    );
  }

  export default App;



// props are passed in when rendering a component