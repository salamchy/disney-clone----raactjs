import React from 'react'
import GenereList from '../Constant/GenresList';
import MovieList from './MovieList';

const GenreMovieList = () => {
  return (
    <div>
        {GenereList.genere.map((item,index)=> index <=4 && (
            <div className=' p-8 px-8 md:px-16' >
                <h2 className='text-[20px] text-white font-medium text-center uppercase'>{item.name}</h2>

                <MovieList genreId={item.id} index_={index} />

            </div>
        ))}
    </div>
  )
}

export default GenreMovieList