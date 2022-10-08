import { Suspense } from "react"
import { Link } from "react-router-dom"

export const MovieCard = ({ movie }) => {

  return (
    <Suspense fallback={<span className="text-center font-bold text-2xl flex justify-center items-center">Loading...</span>}>
        <Link to={`/movie/${movie.id}`}>
        <div className=" border border-gray-800 hover:scale-95 overflow-hidden transition-transform ease-in-out duration-200 cursor-pointer rounded-md ">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
        </div>
    </Link>
    </Suspense>
  )
}
