import Video from './components/Video';
import React from 'react';
import './styles.css';

export default function App(){

  let obj = {
    title: "Interest",
    interest: ["Design","Programming","Computer Science","Editing"] 
  };

  let heading = 'Resume shashank';

  return (
    <>
    {heading} <hr />
    <Video title={obj.title} interest={obj.interest.map((item, index) => (
        <li key={index}>{item}</li>
    ))} />
    </>
  );
}
