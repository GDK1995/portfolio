import Contacts from '../items/Contacts';
import Aboutbttn from '../items/Aboutbttn';
import { HELLO_WORLD, WHO_I_AM, PROFFESION } from '../../store/constants';
import { PINK_TEXT } from '../../store/classes'

function home(props) {
  const handleScroll = (item) => props.toScroll(item);

  return (
    <>
      <section id="home" className="bg-black h-screen 2xl:h-[750px] flex flex-col items-center">
        <div className='flex flex-col justify-evenly h-full items-center my-auto text-white'>
          <div className='flex flex-col justify-center items-center'>
            <p className={PINK_TEXT}>{HELLO_WORLD}</p>
            <h2 className='text-3xl lg:text-5xl'>{WHO_I_AM}</h2>
            <span className="uppercase mt-4 after:content-['|'] after:ml-0.5 before:mr-0.5 before:content-['|'] text-gray-300">{PROFFESION}</span>
          </div>
          <Aboutbttn scroll={handleScroll}/>
        </div>
        <div className="mb-8">
          <Contacts />
        </div>
      </section>
    </>
  )
}

export default home
