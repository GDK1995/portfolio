import { PORTFOLIO } from "../../store/constants";
import { PINK_TEXT } from "../../store/classes";

function portfolio () {
  return (
    <>
      <section id="portfolio" className="flex flex-col py-16 items-center">
        <h5 className={PINK_TEXT}>{PORTFOLIO}</h5>
      </section>
    </>
  )
}

export default portfolio