import { useEffect, useState } from "react"

import axios from "../lib/axios";
import requests from "../lib/requests";

const Banner = () => {
    const [movies, setMovies] = useState([])
    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(requests.fetchTrending)
    //         setMovies(
    //             request.data.results[
    //             Math.floor(Math.random() * request.data.results.length - 1)
    //             ]
    //         )
    //         return request;
    //     }
    //     fetchData()

    // }, []);

    useEffect(() => {
        async function fetchData() {

            await axios.get(requests.fetchTrending).then((res) => {
                console.log(res.data.results);
                setMovies(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
                return res
            })
        }
        fetchData();
    }, []);
    console.log("hello" + movies)
    return (
        <header className=" h-[448px] relative z-0 object-contain text-white" style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
            backgroundPosition: "center center",
        }}>

            <div className="ml-8 pt-36 h-48">
                <h1 className="text-5xl  font-bold pb-5">{movies?.title || movies?.original_title || movies?.original_name}</h1>

                <button className="btn">
                    Play
                </button>
                <button className="btn">
                    My list
                </button>
                <h1 className="text-sm pt-4  h-10 font-semibold max-h-96 line-clamp-3 ">{movies?.overview}</h1>
            </div>


            <div className="bg-gradient-to-b from-transparent to-black h-[17.4rem]" />
        </header>
    )
}

export default Banner