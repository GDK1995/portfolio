import { MORE_ABOUT_ME } from '../../store/constants';
import { MdKeyboardArrowDown } from "react-icons/md";

function aboutBttn (props) {
  const clicked = () => props.scroll('about')

  return (
    <>
      <button onClick={clicked} className='flex justify-center border border-gray-500 hover:border-pink-500 ease-in-out duration-500 p-4'>
        <p className='uppercase font-bold'>{MORE_ABOUT_ME}</p>
        <MdKeyboardArrowDown fill='white' size={20} className='my-auto ml-2'/>
      </button>
    </>
  )
}

export default aboutBttn
