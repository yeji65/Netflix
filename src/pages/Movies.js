import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Container,Row,Col} from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import Pagination from "react-js-pagination";
import { MovieAction } from '../redux/actions/MovieAction';
import { useSearchParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import Sort from"../component/Sort";

const Movies = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector((state)=>state.movie.popularMovies)
  const searchMovies = useSelector((state)=>state.movie.SearchMovie)
  const [page, setPage] = useState(1);
  const [query,setQuery] = useSearchParams()
  // const handlePageChange = (page) => {
  //   setPage(page);
  //   console.log(page)
  // };
  
  const getMoviesSearch =()=>{
    let searchQuery = query.get("query") || ""
    console.log("쿼리값은?",searchQuery);
    dispatch(MovieAction.getMoviesSearch(searchQuery))
  }

  useEffect(()=>{
    dispatch(MovieAction.getMovies(),
    getMoviesSearch())
  },[query])

  return (
    <div className='moviecard'>
      <Container>
       {/* <Col className='movie-left'><input type="text"/></Col> */}
        <Sort />
      </Container>
      <Container>
        {searchMovies?
        <Row>{searchMovies && searchMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>:
        <Row>{popularMovies && popularMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>
      }
         <div>
        {/* <Pagination
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={popularMovies.total_pages}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        /> */}
      </div>
      </Container>

    </div>
  )
}

export default Movies