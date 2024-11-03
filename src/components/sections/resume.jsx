
import { RESUME, JOBS, STUDY, WORK, EDUCATION } from '../../store/constants';
import { PINK_TEXT } from "../../store/classes";
import Experience from '../items/experience';
import { MdWork } from "react-icons/md";
import { IoMdBookmarks } from "react-icons/io";


function resume () {
  const jobExp = JOBS.map((job, index) =>
    <Experience
      key={job + index}
      job={job.job}
      time={job.time}
      name={job.company}
      about={job.about}
      content={<MdWork size={25} fill='white' className='m-auto'/>} />
  )

  return (
    <>
      <section id="resume" className='flex flex-col py-24 items-center bg-gray-100 w-full'>
        <h5 className={PINK_TEXT}>{RESUME}</h5>
        <div className='flex flex-col mt-10 w-full 2xl:items-center'>
          <h2 className='text-center text-lg uppercase font-bold mb-4'>{WORK}</h2>
          {jobExp}
        </div>
        <div className='flex flex-col mt-10 w-full 2xl:items-center'>
          <h2 className='text-center text-lg uppercase font-bold mb-4'>{EDUCATION}</h2>
          <Experience
            job={STUDY.degree}
            time={STUDY.time}
            name={STUDY.university}
            about={STUDY.speciality}
            content={<IoMdBookmarks size={25} fill='white' className='m-auto'/>} />
        </div>
      </section>
    </>
  )
}

export default resume