import React from 'react';
import styles from '../styles.scss'
import map from '../utils/ipaSymbolMap';

const IpaTile = ({ phenome }) => {
  return (
    <span style={{
      fontSize: "30px",
      fontColor: "blue",
      border: "1px solid black",
      margin: "3px",
      padding: "3px",
    }}>
    {" "}
      <span dangerouslySetInnerHTML={{__html: map[phenome]}} />
      {/* <h1 dangerouslySetInnerHTML={{__html: map['epsilon']}} /> */}
    </span>
  )
};

export default IpaTile;