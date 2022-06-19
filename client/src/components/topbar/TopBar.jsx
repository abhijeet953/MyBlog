import "./topbar.css";
import {Link} from 'react-router-dom';
import React from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
        <div className="topLeft">
          <a href="https://www.facebook.com/"><i className="topIcon fa-brands fa-facebook"></i></a>
          <a href="https://www.twitter.com"><i className="topIcon fa-brands fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="topIcon fa-brands fa-instagram"></i></a>
          <a href="https://github.com/abhijeet953"><i className="topIcon fa-brands fa-github"></i></a>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/" >HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/" >CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
                <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImage" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}
