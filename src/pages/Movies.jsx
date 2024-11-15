import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Card } from '../components/UI/Card';
  
export const Movies = () => {
  const movieData = useLoaderData();
  console.log(movieData);
  
  return (
    <div className='m-auto w-[80vw]'>
    <ul className='grid grid-cols-4 gap-4'>
    { movieData.Search.map((currMovie) =>{ return <Card key={currMovie.imdbID} curMovie={currMovie} />}) }
    </ul>
    </div>
  )
}
