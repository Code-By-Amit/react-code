import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Card.css'
export const Card = ({ curMovie }) => {
    const { Poster, Title, Type, Year, imdbID } = curMovie;
    return (
        <>
            <li className="flex justify-center items-center py-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-72">
                    <div className="relative">
                        <img
                            src={Poster}
                            className="w-full h-80 object-cover"
                            alt={imdbID}
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800">{Title}</h2>
                        <p className="text-sm text-gray-500">{Type} | {Year}</p>
                        <NavLink to={`/movie/${imdbID}`}>
                            <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                                Watch now
                            </button>
                        </NavLink>
                    </div>
                </div>
            </li>



        </>
    )
}
{/* <li className="card flex justify-center items-center flex-col">
                <img src={Poster} alt="Movie Poster" />
                    <div class="card-content flex flex-col items-start">
                        <h2 class="card-title">Title : {Title}</h2>
                        <p class="card-type">Type : {Type}</p>
                        <p class="card-year">Year: {Year}</p>
                        <p class="card-imdbID">IMDb ID: {imdbID}</p>
                    </div>
            </li> */}