import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {useParams} from "react-router-dom"
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { MovieAction } from '../redux/actions/MovieAction'
import { Badge } from 'react-bootstrap'

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const movie = useSelector((state)=>state.movie.selectedMovie)
  const genreList = useSelector((state)=>state.movie.genreList)
  
  useEffect(()=>{
    dispatch(MovieAction.getMoviesDetail(id),
    dispatch(MovieAction.getMovies()))
   },[])
   

  return (
    <Container>
      <Row>
        <Col>
          
        </Col>
        <Col>
          <h1>{movie?.title}</h1>
          {/* <div>{movie?.genre_ids.map((id)=>(<Badge bg="danger">{genreList.find((item)=>item.id == id).name}</Badge>))}</div> */}
          <div>{movie?.overview}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetail;