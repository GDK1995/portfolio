import { PORTFOLIO } from "../../store/constants"
import { PINK_TEXT } from "../../store/classes"
import PortfolioItem from "../items/PortfolioItem"

function portfolio () {
  return (
    <>
      <section id="portfolio" className="flex flex-col py-16 items-center">
        <h2 className={PINK_TEXT}>{PORTFOLIO}</h2>
        <PortfolioItem />
      </section>
    </>
  )
}

export default portfolio