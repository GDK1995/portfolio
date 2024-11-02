import { MORE_ABOUT_ME } from '../../store/constants';
import { MdKeyboardArrowDown } from "react-icons/md";

function aboutBttn () {
  return (
    <>
      <div className='flex cursor-pointer justify-center border border-gray-500 hover:border-pink-500 ease-in-out duration-500 p-4'>
        <p className='uppercase font-bold'>{MORE_ABOUT_ME}</p>
        <MdKeyboardArrowDown fill='white' size={20} className='my-auto ml-2'/>
      </div>
    </>
  )
}

export default aboutBttn
