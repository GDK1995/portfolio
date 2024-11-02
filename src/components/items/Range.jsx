function range ({ skill, percent }) {
  return (
    <>
      <li className="relative w-full mb-2">
        <strong className="uppercase">{skill}</strong>
        <div className="bg-gray-300 h-2 rounded-sm w-full mt-2">
          <span className={`absolute bg-black w-[${percent}%] h-2 rounded-sm ease-in-out duration-500`}></span>
        </div>
      </li>
    </>
  )
}

export default range
