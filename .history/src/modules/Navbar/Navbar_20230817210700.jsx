import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import items from "./items";
import { isUserLogin } from "redux/auth/auth-selectors";
import css from "./navbar.module.scss"
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
  
     const elements = filteredItems.map(({ id, text, link }) => (
       <li key={id}>
         <NavLink className={css.link} to={link}>
           {text}
         </NavLink>
       </li>
     ));
   
    return (
      <div className={`${css.menu} container`}>
        <ul className={css.menu}>{elements}</ul>
       
        {!isLogin && <NavbarAuth />}
        {isLogin&&<NavbarUser/>}
        <Outlet />
      </div>
    ); 
}

export default Navbar;