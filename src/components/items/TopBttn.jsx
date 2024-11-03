import { FaArrowUpLong } from "react-icons/fa6";

function TopBttn (props) {
  const clicked = () => {
    props.toScroll('home');
    console.log('home')
  }

  return (
    <>
      <button onClick={clicked} className="fixed flex bottom-2 right-2 h-14 w-14 rounded-full bg-pink-500 hover:bg-pink-600">
        <FaArrowUpLong size={20} fill="white" className="m-auto"/>
      </button>
    </>
  )
}

export default TopBttn