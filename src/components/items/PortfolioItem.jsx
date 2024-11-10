import { PORTFOLIO_LIST } from '../../store/constants'

function PortfolioItem () {
  return (
    <>
      <ul className='flex flex-row gap-8'>
        {PORTFOLIO_LIST.map((photo, index) =>
          <li
            key={photo + index}
            className='cursor-pointer'>
            <div className='rounded relative shadow-3xl hover:shadow-md'>
              <span
                className='flex items-center justify-center absolute inset-0 duration-500 ease-in-out opacity-0 text-2xl hover:bg-black hover:opacity-25 hover:rounded hover:text-white'>
                open
              </span>
              <img
                src={photo}
                alt={`my work number ${index + 1}`}
                width={420}
                className='rounded'/>
            </div>
            <h3></h3>
          </li>
        )}
      </ul>
    </>
  )
}

export default PortfolioItem