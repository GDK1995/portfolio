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
      <section className="flex flex-col py-24 items-center">
        <h5 className={PINK_TEXT}>{ABOUT}</h5>
        <img src="src/assets/img/img.png" alt="avatar" className="w-32 h-32 rounded-full object-cover mt-10"/>
        <div className="flex flex-col lg:flex-row max-w-[1240px] mx-auto my-10">
          <div className="mx-20 my-5">
            <strong className="uppercase">
              {PROFILE}
            </strong>
            <ul className="leading-tight mt-4">
              {list}
            </ul>
          </div>
          <div className="mx-20 lg:w-full my-5">
            <strong className="uppercase">
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
