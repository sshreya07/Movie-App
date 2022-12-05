import { Suspense, useEffect, useState } from "react"
import Select from "react-select";
import { MovieCard } from "./MovieCard";
import ReactPaginate from 'react-paginate'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

export const Layout = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [releaseDates, setReleaseDates] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [Offset, setOffset] = useState(1);

    const getMovieData = async () => {
        const res = await fetch(`https://movie-task.vercel.app/api/popular?page=1`).then(res => res.json());
        setData(res.data.results);
        setTotalPages(res.data.total_pages);
    }

    useEffect(() => {
        getMovieData();
        //eslint-disable-next-line
    }, [])
    
    const year = [
        {value:'2022' , label:'2022'},
        {value:'2021' , label:'2021'},
        {value:'2020' , label:'2020'},
        {value:'2019' , label:'2019'},
        {value:'2018' , label:'2018'},
        {value:'2017' , label:'2017'},
        {value:'2016' , label:'2016'},
        {value:'2015' , label:'2015'},
        {value:'2014' , label:'2014'},
        {value:'2013' , label:'2013'},
        {value:'2012' , label:'2012'},
        {value:'2011' , label:'2011'},
    ]

    const handlePageClick = async (data) => {
        setOffset(data.selected);
        const res = await fetch(`https://movie-task.vercel.app/api/popular?page=${data.selected}`).then(res => res.json());
        setData(res.data.results);
        window.scrollTo({top:0});
    };

    const handleSearch = async (e) => {
        const res = await fetch(`https://movie-task.vercel.app/api/search?page=1&query=${search}`).then(res => res.json());
        setData(res.data.results);
        setSearch("");
        e.preventDefault();
    }

    const handleYear = async (e) => {
        setReleaseDates(e.value);
        setData(data.filter((d) => d.release_date.split("-")[0] === e.value));
    }

  return (
    <Suspense fallback={<span className="text-black text-center font-bold text-2xl flex justify-center items-center">Loading...</span>}>
    <div id="top" className="bg-gray-800 text-white overscroll-contain ">
        
        {/* //implementing Movie Search Bar */}
        <div className="flex justify-end md:p-6 p-4 ">
            {/* <Select options={year} name="year" value={year.value} className="text-black" onChange={handleYear} ></Select> */}
            <div className="flex space-x-3">
                <input list="data" name="search" value={search} placeholder="Search movies.." className="p-3 h-6 rounded-md md:p-3 md:h-10 text-black" onChange={(e) => setSearch(e.target.value)} />
                <div className="bg-indigo-400 rounded-md px-4 md:px-5 md:py-2 cursor-pointer" onClick={handleSearch}>Search</div>
            </div>
        </div>
            
        {/* //display banner with react-responsive-carousal */}
        <div className="max-w-7xl mx-auto">
            <Carousel showIndicators autoPlay  >
                {data.map((movie,index) => (
                    <div key={index} className="transition-transform duration-200 ease-in-out ">
                        <p className="text-xl md:text-5xl text-red-700 animate-bounce absolute p-3 text-center">{ movie.title.toUpperCase()}</p>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} loading="eager" />
                    </div>
                ))}
            </Carousel>
              </div>  
        <h3 className="text-2xl max-w-7xl mx-auto font-bold p-6">Trending Movies:</h3>
        <div className="max-w-7xl h-max grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 p-5 mx-auto transition-opacity">
            {data.map((movie) => (
                <MovieCard movie={movie} key={ movie.id }  />
            ))}
        </div>
            
        {/* // pagination */}
        <div>
            <ReactPaginate
            key={"selected_Page_"+Offset}
            forcePage={Offset}
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={totalPages}
            marginPagesDisplayed={0}
            pageRangeDisplayed={0}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex justify-center space-x-3 p-3 md:space-x-5 md:p-5 items-center w-1/6 mx-auto "}
            pageClassName={"border border-indigo-400 bg-indigo-400 px-5 py-2 rounded-md"}
            pageLinkClassName={"page-link"}
            previousClassName={"border border-indigo-400 bg-indigo-400 px-5 py-2 rounded-md"}
            previousLinkClassName={"page-link"}
            nextClassName={"border border-indigo-400 bg-indigo-400 px-5 py-2 rounded-md"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link "}
            activeClassName={"border border-yellow-500 bg-yellow-500 px-5 py-2 rounded-md"}
        />
        </div>
    </div>
    </Suspense>
    
  )
}
