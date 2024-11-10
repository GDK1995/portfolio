import Contacts from '../items/Contacts';
import Aboutbttn from '../items/Aboutbttn';
import { HELLO_WORLD, WHO_I_AM, PROFFESION } from '../../store/constants';
import { PINK_TEXT } from '../../store/classes'

function home(props) {
  const handleScroll = (item) => props.toScroll(item);

  const styleHeight = window.screen.height - 72

  return (
    <>
      <section
        id="home" className="bg-black flex flex-col items-center" style={{height: `${styleHeight}px`}}>
        <div className='flex flex-col justify-evenly h-full items-center my-auto text-white'>
          <div className='flex flex-col justify-center items-center'>
            <p className={PINK_TEXT}>{HELLO_WORLD}</p>
            <h2 className='text-3xl lg:text-7xl'>{WHO_I_AM}</h2>
            <span className="uppercase mt-4 after:content-['|'] after:ml-0.5 before:mr-0.5 before:content-['|'] text-gray-300">{PROFFESION}</span>
          </div>
          <Aboutbttn scroll={handleScroll}/>
        </div>
        <Contacts />
      </section>
    </>
  )
}

export default home
