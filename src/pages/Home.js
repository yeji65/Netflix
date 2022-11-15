import React from 'react'
import { useEffect } from 'react'
import { MovieAction } from '../redux/actions/MovieAction'
import { useDispatch,useSelector } from 'react-redux'
import Banner from '../component/Banner'
import MovieSlide from '../component/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const {popularMovies,topRatedMovies,upcomingMovies,loading} = useSelector((state)=>state.movie)
 
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(MovieAction.getMovies())
  },[])


  //로딩이 true면 로딩스피너를 보여주고
  //false 면 데이터를 보여주고

  //true:데이터 도착 전
  //false : 데이터 도착 후 에러가 났을 때

  if(loading){
    return <ClipLoader color="#ffff" loading={loading} size={150} />
  }
  return (
    <div>

    <Banner movie={popularMovies?.results[0]}/>
    
    <h1>Popular Movie</h1>
    <MovieSlide movie={popularMovies}/>
    <h1>Top rated Movie </h1>
    <MovieSlide movie={topRatedMovies}/>
    <h1>Upcoming Movie</h1>
    <MovieSlide movie={upcomingMovies}/>
    
    </div>
  )
}

export default Home