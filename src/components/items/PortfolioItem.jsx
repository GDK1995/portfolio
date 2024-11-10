import { PORTFOLIO_LIST } from '../../store/constants'

function PortfolioItem () {
  return (
    <>
      <ul className='flex flex-row gap-2'>
        {PORTFOLIO_LIST.map((photo, index) =>
          <li key={photo + index}>
            <img
              src={photo}
              alt={`my work number ${index + 1}`}
              width={420}
              className='rounded'/>
          </li>
        )}
      </ul>
    </>
  )
}

export default PortfolioItem