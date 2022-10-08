import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import star from './star.png';
import fire from './fire.png';
import adult from './-18.png';
import underage from './underage.png';

export const MoviePage = () => {
    const params = useParams();
    const { id } = params;

    const [movie, setMovie] = useState({});

    const getMovieData = async () => {
        const res = await fetch(`https://movie-task.vercel.app/api/movie?movieId=${id}`).then(res => res.json());
        setMovie(res.data);
    }
    console.log(movie);

    useEffect(() => {
        getMovieData();
       //eslint-disable-next-line 
    },[])

return (
    <Suspense fallback={<span className="text-center font-bold text-2xl flex justify-center items-center">Loading...</span>}>
        <div className="bg-gray-800">
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="md:h-1/6 transition-opacity  lg:relative w-full" />
        <div className="max-w-7xl lg:absolute md:top-28 md:left-20 ">
            <div className="backdrop-blur-sm lg:bg-white/30 w-full h-max p-3 flex lg:items-center flex-col md:flex-row text-white lg:text-black ">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="w-5/12 lg:w-2/6 hidden md:inline-block " />
                <div className="text-lg">
                    <div className="text-4xl font-bold lg:text-gray-900 text-center ">{movie.title}</div>
                    <div className="p-3 text-center font-bold">{ movie.tagline }</div>
                        <div className=" lg:flex">
                            <div className="flex space-x-3 px-5"><span className="font-bold">Genre:</span>
                            {movie.genres && movie.genres.map((data) => ( 
                            <p> { data.name }</p>
                        ))}
                        </div>
                        <div className="flex space-x-3 px-5"><span className="font-bold">Languages:</span>
                        {movie.spoken_languages && movie.spoken_languages.map((data) => ( 
                        <p> { data.name }</p>
                        ))}
                        </div>
                    </div>
                    <div className="px-5 py-3">{ movie.overview }</div>
                    <div className="lg:flex grid grid-cols-3 text-center items-center">
                        <div className="px-5 py-3 ">{movie.adult ? <img src={adult} className="h-8 w-8" /> : <img src={ underage } className="h-8 w-8" /> }</div>
                        <div className="px-5 py-3 font-medium">{movie.status} { movie.release_date}</div>
                        <div className="px-5 py-3 flex space-x-2 items-center"><img src={fire} className="w-5 h-5" /> <h5>Popularity: {movie.popularity}</h5></div>
                        <div className="px-5 py-3 flex space-x-2 items-center"><img src={star} className="w-4 h-4" /><h5>Rating  {movie.vote_average }</h5></div>
                        <div className="px-5 py-3">Votes  {movie.vote_count }</div>
                    </div>
                    <div className="px-5 py-3">
                        <span className="font-bold">Production Companies:</span>
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-5 ">
                        {movie.production_companies && (movie.production_companies.map((data) => (
                        <div className="bg-white/30 rounded-md backdrop-blur-sm text-center">
                            <img src={`https://image.tmdb.org/t/p/original/${data.logo_path}`} className="w-full border-b border-gray-400 p-3 " />
                                <div>
                                    <div className="font-medium">{data.name}</div>
                                    <div>{ data.origin_country }</div>
                                </div>
                        </div>
                    )))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Suspense>
)
}
