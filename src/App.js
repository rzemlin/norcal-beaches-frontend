import React from 'react'
import Header from './components/Header'
import BeachForm from './components/BeachForm';
import BeachContainer from './components/BeachContainer'
import beachData from './beachData'
function App() {
  return (
    <div className="App">
    <Header />
    <BeachForm beaches={beachData}/>
    <BeachContainer beaches={beachData} />
    </div>
  );
}

export default App;



// props are passed in when rendering a component