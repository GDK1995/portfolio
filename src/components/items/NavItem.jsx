import { useState } from "react"
import { NAV_LIST, LG_SCREEN } from "../../store/constants"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

function Nav (props) {
  const isScreenWide = window.screen.width < LG_SCREEN

  const [nav, setNav] = useState(!isScreenWide)
  const handleNav = () => { setNav(!nav) }

  const clicked = (item) => props.scroll(item)

  const navList = NAV_LIST.map((nav, index) =>
    <li
      key={nav + index}
      onClick={e => clicked(e.target.innerHTML)}
      className="cursor-pointer border-b border-gray-100 lg:border-none text-xs hover:text-sm lg:text-sm hover:lg:text-base w-36 lg:w-auto ease-in-out duration-200 z-10 bg-black p-4 lg:p-0">
      <a href="/">
        { nav }
      </a>
    </li>
  )

  return (
    <>
      <nav>
        <button
          onClick={handleNav}
          className="block lg:hidden ease-in-out duration-300">
          {nav ? <AiOutlineClose fill="white" size={20}/> : <AiOutlineMenu fill="white" size={20}/>}
        </button>
        <ul className={nav ? 'flex flex-col lg:flex-row lg:gap-x-5 my-auto uppercase text-white absolute top-15 right-0 lg:static ease-in-out duration-500' : 'fixed right-[-200px]'}>
          {navList}
        </ul>
      </nav>
    </>
  )
}

export default Nav