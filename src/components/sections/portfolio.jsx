import { PORTFOLIO } from "../../store/constants"
import { PINK_TEXT } from "../../store/classes"
import PortfolioItem from "../items/PortfolioItem"

function portfolio () {
  return (
    <>
      <section id="portfolio" className="flex flex-col py-16 items-center">
        <h2 className={`${PINK_TEXT} mb-10`}>{PORTFOLIO}</h2>
        <div className="">
          <PortfolioItem />
        </div>
      </section>
    </>
  )
}

export default portfolio