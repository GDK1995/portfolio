function experience ({ job, time, name, content, about }) {
  return (
    <>
      <div className="relative px-8 py-4 before:h-full before:bg-gray-300 before:w-[1px] before:absolute before:left-[2.6rem] before:lg:left-[317px] before:xl:left-[313px] before:top-0">
        <div className="flex absolute bg-[#313131] rounded-full w-12 h-12 left-5 lg:left-[294px] xl:left-[290px]">
          {content}
        </div>
        <div className="flex flex-col lg:flex-row w-full ml-10 sm:ml-16 lg:ml-0">
          <div className="flex flex-col grow-0 shrink-0 lg:w-[350px] after:bg-gray-300 after:lg:bg-transparent after:rounded after:h-1 after:w-16 after:absolute after:top-20">
            <strong className="uppercase text-xl">{job}</strong>
            <p className="text-gray-500">{time}</p>
          </div>
          <div className="mt-8 lg:mt-0 w-[220px] sm:w-[400px] md:w-[530px] lg:w-[610px] xl:w-[634px]">
            <strong className="text-lg">{name}</strong>
            <p className="text-gray-500 mt-3">{about}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default experience