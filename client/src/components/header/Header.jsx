import React from 'react';
import './header.css'

export default function Header() {
  return (
    <div className="header">
       <div className="headerTitles">
       <span className="headerTitleSm">React and Node</span>
       <span  className="headerTitleLg">Blog</span>
       </div>
       <img className="headerImg" 
       src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
       alt=""/>
    </div>
  )
}
