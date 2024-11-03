
import { RESUME, JOB_LIST, JOB_TIME_LIST, JOB_COMP_LIST, JOB_ABT_LIST, ST_DEGREE, ST_TIME, ST_UNIVERSITY, ST_SPECIALITY } from '../../store/constants';
import { PINK_TEXT } from "../../store/classes";
import Experience from '../items/experience';
import { MdWork } from "react-icons/md";
import { IoMdBookmarks } from "react-icons/io";


function resume () {
  const jobExp = JOB_LIST.map((job, index) =>
    <Experience
      key={job + index}
      job={job}
      time={JOB_TIME_LIST[index]}
      name={JOB_COMP_LIST[index]}
      about={JOB_ABT_LIST[index]}
      content={<MdWork size={25} fill='white' className='m-auto'/>} />
  )

  return (
    <>
      <section id="resume" className='flex flex-col py-24 items-center bg-gray-100'>
        <h5 className={PINK_TEXT}>{RESUME}</h5>
        <div className='flex flex-col justify-center items-center mt-10'>
          {jobExp}
        </div>
        <div className='flex flex-col justify-center items-center mt-10'>
        <Experience
          job={ST_DEGREE}
          time={ST_TIME}
          name={ST_UNIVERSITY}
          about={ST_SPECIALITY}
          content={<IoMdBookmarks size={25} fill='white' className='m-auto'/>} />
        </div>
      </section>
    </>
  )
}

export default resume