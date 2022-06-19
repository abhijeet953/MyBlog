import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './sidebar.css';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImage"
                src="https://pics.me.me/thumb_ernest-khalimov-gigachad-know-your-meme-53060342.png" 
                alt=""
                />
                <p>Greetings, Fellow User. I'm GigaChad and this blog website is created by me.
                Write Blogs and Post them for the world to see.
                </p>
            </div>
            
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                 <div>
                 <a href="https://www.facebook.com/"><i className="sidebarIcon fa-brands fa-facebook"></i></a>
                 <a href="https://www.twitter.com"><i className="sidebarIcon fa-brands fa-twitter"></i></a>
                 <a href="https://www.instagram.com"><i className="sidebarIcon fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/abhijeet953"><i className="sidebarIcon fa-brands fa-github" ></i></a>
                    </div>
            </div>
    </div>
  );
}

