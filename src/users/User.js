import React from 'react';

const User = (props) => {
  return (<div>Name: {props.children}   runs: {props.runs}</div>)
}

export default User;
