import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Container,Row,Col} from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
const Movies = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector((state)=>state.movie.popularMovies)
  
console.log("popularMovies",popularMovies)

  return (
    <div className='moviecard'>
      <Container>
       <Col className='movie-left'><input type="text"/></Col>
      </Container>
      <Container>
        <Row  >
        {popularMovies && popularMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}
         </Row>
      </Container>

    </div>
  )
}

export default Movies