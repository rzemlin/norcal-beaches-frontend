import React, {useState} from 'react';
import BeachCard from './BeachCard';

function BeachContainer(beaches) {
  console.log(beaches)

const allBeaches =  beaches.map((beach) => (
  <BeachCard beach={beach} />
));

  return )
    <div>(allBeaches)</div>;
    )
  }
  export default BeachContainer;