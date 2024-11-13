import { PORTFOLIO_LIST } from '../../store/constants'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

function PortfolioItem () {
  const scrolling = document.getElementById('scroll')
  console.log(scrolling)

  let scrollToken = null

  function ScrollDiv (direction) {
    const scroll = document.getElementById('scroll')

    scrollToken = setInterval(function(){
      if(direction === 'left'){
        scroll.scrollBy({ left: 10, behavior: 'smooth' })
      } else {
        scroll.scrollBy({ left: -10, behavior: 'smooth' })
      }
    }, 2,)
  }

  function stopScroll(){
    console.log('ghj', scrollToken)
    clearInterval(scrollToken)
    console.log('end', scrollToken)
  }

  return (
    <>
      <div className='relative w-[940px]'>
        <li className='absolute left-0 z-10 top-0 bottom-0 flex'>
          <button onMouseOver={() => ScrollDiv('left')} onMouseLeave={() => stopScroll()} className='px-4 m-auto rounded-full bg-gray-500 hover:bg-gray-400 opacity-80 h-[52px] w-[52px] flex'>
            <IoIosArrowBack className='m-auto' fill="white" size={20}/>
          </button>
        </li>
        <li className='absolute right-0 z-10 top-0 bottom-0 flex'>
          <button onMouseOver={() => ScrollDiv('right')} onMouseLeave={() => stopScroll()} className='px-4 m-auto rounded-full bg-gray-500 hover:bg-gray-400 opacity-80 h-[52px] w-[52px] flex'>
            <IoIosArrowForward className='m-auto' fill="white" size={20}/>
          </button>
        </li>
        <ul id='scroll' className='overflow-x-auto overflow-y-hidden whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          {PORTFOLIO_LIST.map((photo, index) =>
            <li
              key={photo + index}
              className='cursor-pointer mx-2 inline-block'>
              <div className='rounded relative shadow-3xl hover:shadow-md'>
                <span
                  className='flex items-center justify-center absolute inset-0 duration-500 ease-in-out opacity-0 text-2xl hover:bg-black hover:opacity-25 hover:rounded hover:text-white'>
                  open
                </span>
                <img
                  src={photo}
                  alt={`my work number ${index + 1}`}
                  width={420}
                  className='rounded'/>
              </div>
              <h3></h3>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default PortfolioItem