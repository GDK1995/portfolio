function experience ({ job, time, name, content, about }) {
  return (
    <>
      <div className="relative flex flex-col 2xl:items-center lg:flex-row p-4 2xl:p-8 before:h-full before:bg-gray-300 before:w-[1px] before:absolute before:left-[2.7rem] before:lg:left-[36.9%] before:2xl:left-[36.3%] before:top-0">
        <div className="flex absolute bg-[#313131] rounded-full w-12 h-12 left-5 lg:left-[35%]">
          {content}
        </div>
        <div className="relative text-left pl-16 2xl:ml-44 2xl:w-[400px] mb-8 after:bg-gray-300 after:lg:bg-transparent after:rounded after:h-1 after:w-16 after:absolute after:top-16">
          <strong className="uppercase text-xl">{job}</strong>
          <p className="text-gray-500">{time}</p>
        </div>
        <div className="relative flex-grow text-left pl-16 2xl:ml-32 w-72 2xl:w-auto lg:max-w-3xl">
          <strong className="text-lg">{name}</strong>
          <p className="text-gray-500 mt-3">{about}</p>
        </div>
      </div>
    </>
  )
}

export default experience