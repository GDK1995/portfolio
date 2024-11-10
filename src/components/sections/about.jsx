import { ABOUT, FACT_LIST, MY_FACT_LIST, PROFILE, SKILLS, SKILL_LIST } from "../../store/constants";
import { PINK_TEXT } from "../../store/classes";
import Range from '../items/Range';

function about () {
  const list = FACT_LIST.map((fact, index) =>
    <li key={fact + index} className="flex flex-col mb-4">
      <strong className="uppercase">{fact}:</strong>
      <h5 className="text-gray-500">{MY_FACT_LIST[index]}</h5>
    </li>
  )

  const skillList = SKILL_LIST.map((skill, index) =>
    <Range key={skill.percent + index} skill={skill.skill} percent={skill.percent}/>
  )

  return (
    <>
      <section id="about" className="flex flex-col py-16 items-center">
        <h2 className={PINK_TEXT}>{ABOUT}</h2>
        <img src="src/assets/img/img.png" alt="avatar" className="w-32 h-32 rounded-full object-cover mt-10"/>
        <div className="flex flex-col lg:justify-between lg:flex-row sm:w-4/5 md:w-[658px] lg:w-full max-w-[1048px] mx-8 lg:mx-auto mt-10">
          <div className="lg:mx-10 mt-5 w-full lg:w-1/2">
            <strong className="uppercase text-lg">
              {PROFILE}
            </strong>
            <ul className="leading-tight mt-4">
              {list}
            </ul>
          </div>
          <div className="lg:mx-10 mt-5 w-full lg:w-1/2">
            <strong className="uppercase text-lg">
              {SKILLS}
            </strong>
            <ul className="leading-tight mt-4">
              {skillList}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default about
