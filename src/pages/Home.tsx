import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="my-36 items-center">
      <div className="text-center ">
        <h1 className="font-bold text-5xl">Welcome to the STORE!</h1>
        <p className="mt-5 mb-5">Your one-stop shop for all kinds of stuff you could think of. 
          Browse, shop, and enjoy exclusive deals tailored just for you.</p>

          <NavLink className='p-2 rounded bg-gray-900 text-white' to='/store'>Shop Now</NavLink>
      </div>
    </div>
  )
}

export default Home