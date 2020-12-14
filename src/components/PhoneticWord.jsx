import React from 'react';
import IpaTile from './IpaTile';

export default ({ phenomeList }) => {
  console.log('phenome list', phenomeList)

  return phenomeList.map(phenome => <IpaTile phenome={phenome} />)
  
  
  
  // <IpaTile phenome="epsilonBackwards"/>;
}