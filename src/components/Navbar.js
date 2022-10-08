import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-gray-900 text-white p-5">
        <div className="max-w-7xl mx-auto flex justify-between">
            <Link to="/"><div className="cursor-pointer">Movie App</div></Link>
            <div className=" flex space-x-6 ">
                <Link to="/"><h3 className=" hover:text-yellow-300 cursor-pointer ">Home</h3></Link>
                <Link to="/about"><h3 className=" hover:text-yellow-300 cursor-pointer ">About</h3></Link>
                
            </div>
        </div>
    </div>
  )
}
