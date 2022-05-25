import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({item}) => {
  const navigate = useNavigate()
  const genreList = useSelector((state)=>state.movie.genreList)
  const showDetail =(id)=>{
    navigate(`/movies/${id}`)
  }
  return (
    <div 
    className="card"
    onClick={() => showDetail(item.id)}
    style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`+")"}}>
        <div className="overlay">
            <h1>{item.title}</h1>
            <div>{item.genre_ids.map((id)=>(<Badge bg="danger">{genreList.find((item)=>item.id == id).name}</Badge>))}</div>
            <div>
                <span>{item.vote_average}</span>
                <span>{item.adult?"청불":"Under 18"}</span>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
