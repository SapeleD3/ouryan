import React from 'react';
import history from '../history';
import '../Pages/Home/home.css';

export default function Button({ text, className, link }: any) {
  return (
    <button className={className} onClick={() => history.push(link)}>
      {text}
    </button>
  );
}
