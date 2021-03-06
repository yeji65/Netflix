import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {useParams} from "react-router-dom"
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { MovieAction } from '../redux/actions/MovieAction'
import { Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
//import { fa-solid fa-star } from '@fortawesome/free-regular-svg-icons';

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

  

   let link = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
  return (
    <Container>
      <Row className='movie-detail'>
        <Col className="movie-img" >
          <img src={link+movie?.poster_path} />
        </Col>
        <Col>
          {/* <div>{ movie.genres.map((id)=>(<Badge bg="danger">{id}</Badge>))}</div> */}
          <h1>{movie?.title}</h1>
          <div className='movie'>
            <span className="movie-info">{movie?.vote_average}</span>
            {/* <FontAwesomeIcon icon="fa-solid fa-star"/> */}
            <span className="movie-info">{movie?.popularity}</span>
            <span className="movie-adult">{movie && movie.adult?"청불":"Under 18"}</span>
          </div>
          <div className="movie-overview" >{movie?.overview}</div>
          <div >
            <div className='movie-low'><Badge bg="danger" className='movie-badge'>budget</Badge> ${movie?.budget}</div>
            <div className='movie-low'><Badge bg="danger" className='movie-badge'>revenue</Badge> ${movie?.revenue}</div>
            <div className='movie-low'><Badge bg="danger" className='movie-badge'>release date</Badge> {movie?.release_date}</div>
            <div className='movie-low'><Badge bg="danger" className='movie-badge'>time</Badge> {movie?.runtime}</div>
          </div>
        </Col>
          <h1 className='movie-low'>
          <Button variant="danger">REVIEW</Button>{' '}
          <Button variant="light">RELATED MOVIES</Button>{' '}
          </h1>
          <div className="movie-review3" >  
            <div className="movie-review2">
              <h1 >{review?.results[0].author}</h1>
              <div className="movie-reviewline">{review?.results[0].content}</div>
            </div>
            <div className="movie-review2">
              <h1>{review?.results[1].author}</h1>
              <div className="movie-reviewline">{review?.results[1].content}</div>
            </div>
            <div className="movie-review2">
              <h1>{review?.results[2].author}</h1>
              <div>{review?.results[2].content}</div>
            </div>
          </div>
          <div >
            {/* <img src={link+recommendation?.results[0].poster_path}/>
            <img src={link+recommendation?.results[1].poster_path}/>
            <img src={link+recommendation?.results[2].poster_path}/>
            <img src={link+recommendation?.results[3].poster_path}/> */}
            {/* {recommendation.map(menu=><Col lg={6}><img src={link+recommendation?.results[{menu}].poster_path}/></Col>)} */}
           <Row className='movie-recommendation'>
            <Col lg={4}><img src={link+recommendation?.results[0].poster_path}/></Col>
            <Col lg={4}><img src={link+recommendation?.results[1].poster_path}/></Col>
            <Col lg={4}><img src={link+recommendation?.results[2].poster_path}/></Col>
            <Col lg={4}><img src={link+recommendation?.results[3].poster_path}/></Col>
            <Col lg={4}><img src={link+recommendation?.results[4].poster_path}/></Col>
            <Col lg={4}><img src={link+recommendation?.results[5].poster_path}/></Col>
            </Row>
          </div>


        




      </Row>
    </Container>
  )
}

export default MovieDetail;