import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';  
import MovieCard from './MovieCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const zoomIn = (event) => {
    event.target.style.width = "600px";
    event.target.style.height = "336px";
    event.target.style.transition = "all 0.5s";
  }

  const zoomOut = (event) => {
    event.target.style.width = "500px";
    event.target.style.height = "280px";
    event.target.style.transition = "all 0.5s";
  }

const MovieSlide = ({movie}) => {
  return (
    <div onmouseenter={(event)=>zoomIn(event)} onmouseleave={(event)=>zoomOut(event)}>
    <Carousel responsive={responsive}  autoPlay={responsive.deviceType !== "mobile" ? true : false} autoPlaySpeed={2000} keyBoardControl={true}>
    {movie && movie.results.map((item)=><MovieCard item={item}/>)}
  </Carousel>;</div>
  )
}

export default MovieSlide