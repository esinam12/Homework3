import React from 'react';
import SampleWallpaper from './sample-wallpaper';


function Header(){
    return(
        
    // Introductory Content
    <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>

      </div>
      < SampleWallpaper />
    </header>

    );
}


export default Header;