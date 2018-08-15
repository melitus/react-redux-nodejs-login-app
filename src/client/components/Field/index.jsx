import React from 'react';

// Passing Custom Reusable Components to Field
export  const Input = props => {
  return (
    <input {...props.input} type={props.type} placeholder={props.placeholder} />
  );
};


