import React,{useState} from 'react';
import Home from '../assets/images/homeIcon.svg';
import Article from '../assets/images/article.svg';
import bookmark from '../assets/images/bookmark.svg';

var SideImage = require('../assets/images/sideImage.png');


const Topnav = ()=>{
  const [data, setData] = useState([]);
  fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message)
    )

    // post

    fetch("/api", {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        age: 30
      })
    })
    

  return(
    <div className="topnav">
      <div className="circle">
        <h2 className="logo">CA</h2>
        <p>{!data ? "Loading..." : data}</p>
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