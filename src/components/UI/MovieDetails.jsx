import React from 'react'
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom'

export const MovieDetails = () => {
    const movie = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        // <div className='flex justify-center items-center'>
        //     <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm w-full">
        //         <img src={movie.Poster} alt={`${movie.Title} Poster`} className="w-full h-48 object-cover" />
        //     </div>
        //     <div className="p-4">
        //         <h2 className="text-xl font-semibold text-gray-800">{movie.Title} ({movie.Year})</h2>
        //         <p className="text-sm text-gray-600 mt-2">{movie.Plot}</p>
        //         <div className="mt-4 space-y-1 text-sm text-gray-700">
        //             <p><span className="font-medium">Director:</span> {movie.Director}</p>
        //             <p><span className="font-medium">Actors:</span> {movie.Actors}</p>
        //             <p><span className="font-medium">Genre:</span> {movie.Genre}</p>
        //             <p><span className="font-medium">Language:</span> {movie.Language}</p>
        //             <p><span className="font-medium">Released:</span> {movie.Released}</p>
        //             <p><span className="font-medium">Runtime:</span> {movie.Runtime}</p>
        //             <p><span className="font-medium">Rating:</span> {movie.imdbRating}</p>
        //         </div>
        //         <button className='px-3 py-2 m-3 bg-red-500 text-white rounded-md' onClick={handleGoBack}>Go Back</button>
        //     </div>
        // </div>
<div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full flex">
        <img src={movie.Poster} alt={`${movie.Title} Poster`} className="w-1/3 h-auto object-cover" />
        <div className="p-6 w-2/3 flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-extrabold text-indigo-800">{movie.Title} <span className="text-indigo-600 font-normal">({movie.Year})</span></h2>
                <p className="text-md text-gray-700 mt-2">{movie.Plot}</p>
                <div className="mt-4 space-y-1 text-md text-gray-800">
                    <p><span className="font-semibold text-indigo-700">Director:</span> {movie.Director}</p>
                    <p><span className="font-semibold text-indigo-700">Actors:</span> {movie.Actors}</p>
                    <p><span className="font-semibold text-indigo-700">Genre:</span> {movie.Genre}</p>
                    <p><span className="font-semibold text-indigo-700">Language:</span> {movie.Language}</p>
                    <p><span className="font-semibold text-indigo-700">Released:</span> {movie.Released}</p>
                    <p><span className="font-semibold text-indigo-700">Runtime:</span> {movie.Runtime}</p>
                    <p><span className="font-semibold text-indigo-700">Rating:</span> ⭐{movie.imdbRating}</p>
                </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out shadow-md" onClick={handleGoBack}>
                Go Back
            </button>
        </div>
    </div>
</div>




    );
}
