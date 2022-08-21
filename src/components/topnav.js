import React from 'react';
import Home from '../assets/images/homeIcon.svg';
import Article from '../assets/images/article.svg';
import bookmark from '../assets/images/bookmark.svg';

var SideImage = require('../assets/images/sideImage.png');


const Topnav = ()=>{

  return(
    <div className="topnav">
      <div className="circle">
        <h2 className="logo">CA</h2>

      </div>

    </div>

  )
}

const Sidebar = ()=>{
  return(
    <div className="sidebar">
      <img src={SideImage } className="sideimage" alt="" />
      <div className="sideItem">
         <div className=' '> 
         <img src={Home} alt="" />
          <h3>DASHBOARD</h3>
          </div>
          <div>
          <img src={Article} alt="" />

          <h3>MENU ITEM 3</h3>
          </div>
          <div>
          <img src={bookmark} alt="" />

          <h3>MENU ITEM 4</h3>
          </div>
          <div>
          <img src={bookmark} alt="" />

          <h3>MENU ITEM 5</h3>


         </div>
      </div>
      <div className='arrowmark'>
        <p> &lt;</p>

      </div>
  
    </div>
  )
}

export {Topnav, Sidebar}