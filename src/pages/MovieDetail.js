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
  const review = useSelector((state)=>state.movie.reviewedMovie)
  const genreList = useSelector((state)=>state.movie.genreList)
  const recommendation = useSelector((state)=>state.movie.RecommendationMovie)
  
  useEffect(()=>{
    dispatch(MovieAction.getMoviesDetail(id),
    dispatch(MovieAction.getMovies()))
   },[])

   useEffect(()=>{
    dispatch(MovieAction.getMoviesReview(id),
    dispatch(MovieAction.getMoviesRecommendation(id)))
   },[])

   

  return (
    <Container>
      <Row>
        <Col className="">
          <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+movie?.poster_path} />
        </Col>
        <Col>
          <h1>{movie?.title}</h1>
          {/* <div>{movie?.genre_ids.map((id)=>(<Badge bg="danger">{genreList.find((item)=>item.id == id).name}</Badge>))}</div> */}
          <div>{movie?.overview}</div>
        </Col>
          <div>
            <h1>{review?.results[0].author}</h1>
            <div>{review?.results[0].content}</div>
            <h1>{review?.results[1].author}</h1>
            <div>{review?.results[1].content}</div>
            <h1>{review?.results[2].author}</h1>
            <div>{review?.results[2].content}</div>
          </div>
          <div>
            <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+recommendation?.results[1].poster_path}/>
          </div>
      </Row>
    </Container>
  )
}

export default MovieDetail;