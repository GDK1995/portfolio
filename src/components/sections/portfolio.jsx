import { PORTFOLIO } from "../../store/constants";
import { PINK_TEXT } from "../../store/classes";

function portfolio () {
  return (
    <>
      <section className="flex flex-col py-24 items-center">
        <h5 className={PINK_TEXT}>{PORTFOLIO}</h5>
      </section>
    </>
  )
}

export default portfolio