import React from 'react'
import {useSelector } from 'react-redux'
import { Badge } from 'react-bootstrap'

const ProdctCard_Sort = ({item}) => {
    console.log("itemitemitemitem",item)
    const genreList = useSelector((state)=>state.movie.genreList)
    
  return (
    <div className='moviebanner'  
    style={{backgroundImage:
        "url("+`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item?.poster_path}`+")" }}>
        <div className='movie-total'>
              <div className='movie-main'>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2`+item?.backdrop_path} width={60} className='movie-img'/>
                <h2 className='movie-h2'>{item?.title}</h2>
              </div>
              <div className='movie-line'>
                <p>{item?.genre_ids.map((id)=>(<Badge bg="danger">{genreList.find((item)=>item.id == id)?.name}</Badge>))}</p>
                <p className='movietext'> {item?.overview}</p>
                <span className="movie-average">{item?.vote_average}</span>
                <span className="movie-popularity">{item?.popularity}</span>
                <span className="movie-adult"><b>{item && item.adult?"청불":"Under 18"}</b></span>
              </div>
        </div>
    </div>
  )
}

export default ProdctCard_Sort