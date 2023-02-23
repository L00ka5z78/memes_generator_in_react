import React from 'react';
import './meme.css';
import Troll from './images/Troll Face.png';

export const Header = () => {
  return (
    <header className="header">
      <img className="header--image" src={Troll} alt="smiley :)" />
      <h2 className="header--title">MemeGenerator</h2>
      <h4 className="header--project">Made with 💖 and React </h4>
    </header>
  );
};
