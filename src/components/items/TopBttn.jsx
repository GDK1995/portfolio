import { FaArrowUpLong } from "react-icons/fa6";
import { scroolToTop } from '../../store/functions';

function TopBttn () {
  return (
    <>
      <button onClick={scroolToTop} className="fixed flex bottom-0 right-0 h-14 w-10 bg-pink-500 hover:bg-pink-600">
        <FaArrowUpLong size={20} fill="white" className="m-auto"/>
      </button>
    </>
  )
}

export default TopBttn