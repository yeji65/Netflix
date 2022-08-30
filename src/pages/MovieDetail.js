import React,{ useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {useParams} from "react-router-dom"
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { MovieAction } from '../redux/actions/MovieAction'
import { Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import YouTube from 'react-youtube'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'
//import { fa-solid fa-star } from '@fortawesome/free-regular-svg-icons';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const movie = useSelector((state)=>state.movie.selectedMovie)
  const review = useSelector((state)=>state.movie.reviewedMovie)
  const genreList = useSelector((state)=>state.movie.genreList)
  const recommendation = useSelector((state)=>state.movie.RecommendationMovie)
  const videos = useSelector((state)=>state.movie.VideosMovie)
  
  const [lgShow, setLgShow] = useState(false);

  const [ui,setUi] = useState(false)

  const navigate = useNavigate()
  const showDetail =(id)=>{
    console.log("ssfdsfsfdfsfs",id)
    navigate(`/movies/${id}`)
    window.location.replace(`/movies/${id}`)
  }

   useEffect(()=>{
    dispatch(MovieAction.getMoviesDetail(id),
    dispatch(MovieAction.getMoviesReview(id),
    dispatch(MovieAction.getMoviesRecommendation(id),
    dispatch(MovieAction.getMovies(),
    dispatch(MovieAction.getMoviesVideos(id))))))
   },[])

   let link = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"

  return (
    <Container>
      <Row className='movie-detail'>
        <Col className="movie-img" >
          <img src={link+movie?.poster_path} width={400} />
        </Col>
        <Col>
          <div>{movie && movie.genres.map((id)=>(<Badge pill bg="danger"  className="movie-genre">{genreList && genreList.find((item)=>item.id == id.id)?.name}</Badge>))}</div>
          <h1>{movie?.title}</h1>
          <div className='movie'>
            <span className="movie-average">{movie?.vote_average}</span>
            {/* <FontAwesomeIcon icon="fa-solid fa-star"/> */}
            <span className="movie-popularity"><b>{movie?.popularity}</b></span>
            <span className="movie-adult"><b>{movie && movie.adult?"청불":"Under 18"}</b></span>
          </div>
          <div className="movie-overview" >{movie?.overview}</div>
          <div >
            <div className='movie-low'><Badge bg="danger" className='movie-badge'>budget</Badge> ${movie?.budget}</div>
            <div className='movie-low'><Badge bg="danger" className='movie-badge'>revenue</Badge> ${movie?.revenue}</div>
            <div className='movie-low'><Badge bg="danger" className='movie-badge'>release date</Badge> {movie?.release_date}</div>
            <div className='movie-low'><Badge bg="danger" className='movie-badge'>time</Badge> {movie?.runtime}</div>
            <div className="movie-preview"><Button variant="dark" onClick={() => setLgShow(true)} className="movie-preview-button">PREVIEW</Button>{' '}</div>
          </div>
        </Col>
          <h1 className='movie-low'>
          <Button variant="danger" onClick={() => setUi(false)}>REVIEW</Button>{' '}
          
          <Button variant="light" onClick={() => setUi(true)}>Recommendation</Button>{' '}
          </h1>
            {ui?(
              <div className="movie-review3">
                <Row >
                {recommendation && recommendation.results.map((item)=>(<Col lg={6} ><img src= {link+item.poster_path} className='movie-recommendation' width={450} onClick={() => showDetail(item.id)}/></Col>))}
                </Row>
              </div>
             ):(
          <div className="movie-review3" >  
            <div className="movie-review2">
              <h1 >{ review?.results[0]?.author}</h1>
              <div className="movie-reviewline">{review?.results[0]?.content}</div>
            </div>
            <div className="movie-review2">
              <h1>{review?.results[1]?.author}</h1>
              <div className="movie-reviewline">{review?.results[1]?.content}</div>
            </div>
            <div className="movie-review2">
              <h1>{review?.results[2]?.author}</h1>
              <div className="movie-reviewline">{review?.results[2]?.content}</div>
            </div>
            <div className="movie-review2">
              <h1>{review?.results[3]?.author}</h1>
              <div className="movie-reviewline">{review?.results[3]?.content}</div>
            </div>
            <div className="movie-review2">
              <h1>{review?.results[4]?.author}</h1>
              <div>{review?.results[4]?.content}</div>
            </div>
          </div>
)}
         
          <div>
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body><YouTube videoId={videos?.results[0].key} /></Modal.Body>
              </Modal>
            </div>

            

      </Row>
    </Container>
  )
}

export default MovieDetail;