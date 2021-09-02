/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import { useState } from "react";
// import logo from '../utilisateur.png';
import { SidebarData } from "./SidebarData";
import "./Nav.css";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { NavbarData } from "./NavbarData";
import * as FaIcons from 'react-icons/fa';

function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ style:{color: "#fff", fontSize: "30px" }}}>
        {/*<Link to="/">
          <img
          src="https://image.flaticon.com/icons/png/512/483/483361.png"
          style={{ width: "50px", height: "50px" }}
          onClick={showSidebar}
          />
          </Link>
          <Link to="/Messagerie">
          <img
          src="https://image.flaticon.com/icons/png/512/482/482948.png"
          style={{ width: "50px", height: "50px" }}
          />
          </Link>
          <Link to="/MonFil">
          <img
          src="https://image.flaticon.com/icons/png/512/522/522511.png"
          style={{ width: "50px", height: "50px" }}
          />
          </Link>
          <Link to="/Carte">
          <img
          src="https://image.flaticon.com/icons/png/512/484/484175.png"
          style={{ width: "50px", height: "50px" }}
          />
          </Link>
          <Link to="/Parametres">
          <img
          src="https://image.flaticon.com/icons/png/512/483/483390.png"
          style={{ width: "50px", height: "50px" }}
          />
        </Link> */}

      <ul className="nav-list">
        {NavbarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
            <Link to={item.path} onClick={showSidebar}>
              {item.icon}
              
            </Link>
          </li>
          )
        })}
      </ul>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Nav;
