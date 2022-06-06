import React, {useState, useEffect}from 'react'
import Header from './components/Header'
import BeachForm from './components/BeachForm';
import BeachContainer from './components/BeachContainer'
import BeachEditForm from './components/BeachEditForm'
//import beachData from './beachData'

const App = () => {
  const [beaches, setBeaches] = useState([]);
  const [beachId, setBeachId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/beaches")
      .then((resp) => resp.json())
      .then((beaches) => setBeaches(beaches));
  }, []);
  
  const onAddBeach = (newBeach) => {
    setBeachId((beaches) => [...beaches, newBeach]);
  };

  const completeEditing = () => {
    setBeachId(null);
  };

  const enterBeachEditModeFor = (beachId) => {
    setBeachId(beachId);
  };

  const renderForm = () => {
    if (beachId) {
      return (
        <BeachEditForm
          beachId={beachId}
          completeEditing={completeEditing}
        />
      );
    } else {
      return <BeachForm onAddBeach={onAddBeach} />;
    }
  };
  return (
    <div className="App">
    <Header />
    <BeachContainer beaches={beaches} />
    {renderForm()}
    <BeachForm beaches={beaches}/>
    </div>
  );
  }


export default App;



// props are passed in when rendering a component