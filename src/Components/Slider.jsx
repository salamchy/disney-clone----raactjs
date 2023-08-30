import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, [])

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then(resp => {
      console.log(resp.data.results)
      setMovieList(resp.data.results)
    })
  }

  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 125;
  }

  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 125;
  }

  return (
    <div>
      <HiChevronLeft className=' hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={() => slideLeft(elementRef.current)} />
      <HiChevronRight className=' hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={() => slideRight(elementRef.current)} />

      <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {movieList.map((item, index) => (
          <img src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-grey-400 transition-all duration-100 ease-in' alt="slider image" />
        ))}
      </div>
    </div>
  )
}

export default Slider