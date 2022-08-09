import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Container,Row,Col} from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import Pagination from "react-js-pagination";

const Movies = ({page,count,setPage}) => {
  const dispatch = useDispatch()
  const popularMovies = useSelector((state)=>state.movie.popularMovies)
  // const [page, setPage] = useState(1);
  
  // const handlePageChange=(page)=> {
  //   setPage(page);
  //   console.log(page)
  // }
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
         <div>
         <Pagination
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={count}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={setPage}
        />
        </div>
      </Container>

    </div>
  )
}

export default Movies