import Contacts from '../components/items/Contacts';
import { CONT_LIST, CONTACTS } from '../store/constants';
import { PINK_TEXT } from "../store/classes";
import { FaRegCopyright } from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

function footer () {
  const contact = CONT_LIST.map((item, index) =>
    <div key={item + index}
      className='flex flex-col items-center px-16 gap-4'>
      {index ? <MdMailOutline size={40} fill='rgb(236 72 153)' /> : <BsGeoAlt size={40} fill='rgb(236 72 153)' />}
      <strong>{item}</strong>
    </div>
  )
  return (
    <>
      <footer className='bg-black flex flex-col items-center pt-24 pb-6 text-white'>
      <h5 className={PINK_TEXT}>{CONTACTS}</h5>
        <div className='flex my-20'>
          {contact}
        </div>
        <Contacts />
        <div className='flex gap-2 items-center mt-16 text-gray-400'>
          <FaRegCopyright fill='rgb(156 163 175)' size={20}/>
          <p>2024</p>
        </div>
      </footer>
    </>
  )
}

export default footer