import LogoItem from './items/LogoItem'
import NavItem from './items/NavItem'

function header(props) {
  return (
    <>
      <header className="bg-black">
        <div className='flex items-center max-w-[1248px] mx-auto justify-between p-4'>
          <LogoItem />
          <NavItem scroll={props.scroll}/>
        </div>
      </header>
    </>
  )
}

export default header
