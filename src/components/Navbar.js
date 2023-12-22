import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancelPresentation } from "react-icons/md";
import Logo from "../images/logo.png";
import { links } from "../data";
import "./navbar.css";

const Navbar = () => {
  const [isNavShowing,setIsNavShowing]=useState(false);
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className='logo' onClick={()=>setIsNavShowing(false)}>
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink to={path} className={({isActive})=>isActive?'active-nav':''}
              onClick={()=>setIsNavShowing(prev=>!prev)}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <button className="nav__toggle_btn" onClick={()=>setIsNavShowing(prev=>!prev)}>
          {
            isNavShowing ? <MdCancelPresentation/>: <AiOutlineMenu />
          }
          
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
