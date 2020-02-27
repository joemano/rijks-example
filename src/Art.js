import React from 'react';

const Art = (props) => {
  return(
    <div className="art">
      <img src={props.image} alt={props.title}/>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Art;