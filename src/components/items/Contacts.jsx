import { FaInstagram } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { CONTACT_LINKS } from "../../store/constants"

function Contacts () {
  return (
    <>
      <ul className="flex flex-row gap-5 mb-8">
        {CONTACT_LINKS.map((item, index) =>
          <li key={item + index} className="flex gap-6 items-center">
            <a href={item} target="_blank" className="cursor-pointer">
              {item.includes('github') ? <FaGithub fill="white" size={24}/> : item.includes('telegram') ? <FaTelegramPlane fill="white" size={24}/> : <FaInstagram fill="white" size={24}/>}
            </a>
        </li>)}
      </ul>
    </>
  )
}

export default Contacts
