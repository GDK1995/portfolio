import { useState } from "react";
import { NAV_LIST, LG_SCREEN } from "../store/constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function header(props) {
  const clicked = (item) => props.scroll(item);

  const isScreenWide = window.screen.width < LG_SCREEN;

  const [nav, setNav] = useState(!isScreenWide);
  const handleNav = () => { setNav(!nav) }

  const navList = NAV_LIST.map((nav, index) => <li key={nav + index} onClick={e => clicked(e.target.innerHTML)} className="p-4 cursor-pointer border-b lg:border-none border-gray-100 text-sm hover:text-base lg:text-base hover:lg:text-lg w-36 lg:w-auto ease-in-out duration-200">{ nav }</li>);

  return (
    <>
      <header className="flex items-center max-w-[1240px] justify-between px-4 relative">
        <img className="h-20 my-auto md:h-28 lg:h-32" src="src/assets/img/dg.png" alt="logo" />
        <div>
          <div onClick={handleNav} className="cursor-pointer block lg:hidden ease-in-out duration-300">
            {nav ? <AiOutlineClose fill="white" size={20}/> : <AiOutlineMenu fill="white" size={20}/>}
          </div>
          <ul className={nav ? 'flex flex-col lg:flex-row my-auto uppercase text-white bg-black absolute top-15 right-0 lg:static ease-in-out duration-500' : 'fixed right-[-200px]'}>
            {navList}
          </ul>
        </div>
      </header>
    </>
  )
}

export default header
