function experience ({ job, time, name, content, about }) {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row p-2 before:h-full before:bg-gray-300 before:w-[1px] before:absolute before:left-[3.9rem] before:lg:left-[37%] before:top-0">
        <div className="flex absolute bg-[#313131] rounded-full w-12 h-12 left-10 lg:left-[35%]">
          {content}
        </div>
        <div className="relative text-left pl-32 mb-8 w-96 after:bg-gray-300 after:lg:bg-transparent after:rounded after:h-1 after:w-16 after:absolute after:top-16">
          <strong className="uppercase text-xl">{job}</strong>
          <p className="text-gray-500">{time}</p>
        </div>
        <div className="relative text-left pl-32 lg:max-w-3xl">
          <strong>{name}</strong>
          <p className="text-gray-500 mt-3">{about}</p>
        </div>
      </div>
    </>
  )
}

export default experience