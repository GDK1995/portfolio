function range ({ skill, percent }) {

  return (
    <>
      <li className="relative w-full mb-2">
        <strong className="uppercase">{skill}</strong>
        <div className="bg-gray-300 h-2 rounded-sm w-full mt-2 relative">
          <span style={{width: `${percent}`}} className='absolute bg-black w-[30%] h-2 rounded-sm'></span>
        </div>
      </li>
    </>
  )
}

export default range
