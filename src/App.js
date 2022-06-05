import React from 'react'
import Header from './components/Header'
import BeachForm from './components/BeachForm';
import BeachContainer from './components/BeachContainer'

function App() {
  return (
    <div className="App">
    <Header />
    <BeachForm Beaches={beaches}/>
    <BeachContainer />
    </div>
  );
}

export default App;
