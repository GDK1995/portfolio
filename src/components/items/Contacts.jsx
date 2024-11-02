import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contacts () {
  return (
    <>
      <div className="flex gap-6 items-center">
      <a href="https://github.com/" target="_blank" className="cursor-pointer">
          <FaGithub fill="white" size={20}/>
        </a>
        <a href="https://web.telegram.org/" target="_blank" className="cursor-pointer">
          <FaTelegramPlane fill="white" size={20}/>
        </a>
        <a href="https://www.instagram.com/" target="_blank" className="cursor-pointer">
          <FaInstagram fill="white" size={20}/>
        </a>
      </div>
    </>
  )
}

export default Contacts
