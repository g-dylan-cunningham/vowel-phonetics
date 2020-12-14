import React, { useEffect, useState, Fragment } from 'react';
import PhoneticWord from './PhoneticWord';
import wordList from '../vocab/freeTier/examples.json';
// freeTier/examples.json'
console.log('word', wordList[0].ipa)

export default () => {
  const [ iter, setIter ] = useState(0);
  const handleNextClick = (e) => {
    e.preventDefault();
    // if (iter < wordList.length - 1) {
      setIter(iter + 1);
    // }
  }

  const handlePrevClick = (e) => {
    e.preventDefault();
    // if (iter < wordList.length - 1) {
      setIter(iter - 1);
    // }
  }

  return (
    <Fragment>
      <h3>{wordList[iter].text}</h3>
      <PhoneticWord phenomeList={wordList[iter].ipa}/>
      <div>
        <button onClick={handlePrevClick} disabled={iter===0}>PREVIOUS</button>
        <button onClick={handleNextClick} disabled={iter === wordList.length-1}>NEXT</button>
      </div>
    </Fragment>
  );
}