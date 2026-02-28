import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { Menu } from "./Menu";
import { useState } from "react";

export const NavBar = () => {
  
 const [menu,setMenu] = useState(false) 

  function handleMenu() {
    setMenu((prevState)=> !prevState)
  }

  return (
    <header className="sticky top-0 animate__animated animate__fadeInDown z-3">
      <nav className="bg-white">
        <ul className="grid grid-cols-[1fr_auto_1fr] items-center h-14 px-2">
          <li onClick={handleMenu} className="justify-self-start text-4xl text-(--cor-verde)">
            <IoMenu />
          </li>
          <li className="col-start-2 justify-self-center">
            <img className="w-37.5 " src={logo} alt="" />
          </li>
        </ul>
      </nav>
       {menu && <Menu menuState={setMenu}/>}
    </header>
  );
};
