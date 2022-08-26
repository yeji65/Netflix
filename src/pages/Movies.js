import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Container,Row,Col} from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import Pagination from "react-js-pagination";
import { MovieAction } from '../redux/actions/MovieAction';
import { useSearchParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import Dropdown from"../component/Dropdown";
import Button from 'react-bootstrap/Button';


const Movies = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector((state)=>state.movie.popularMovies)
  const searchMovies = useSelector((state)=>state.movie.SearchMovie)
  const genreList = useSelector((state)=>state.movie.genreList)
  // const [page, setPage] = useState(1);
  const [query,setQuery] = useSearchParams()
  const [genreState,setGenreState] = useState()

  // const handlePageChange = (page) => {
  //   setPage(page);
  //   console.log(page)
  // };

  const getMoviesSearch =()=>{
    let searchQuery = query.get("query") || ""
    dispatch(MovieAction.getMoviesSearch(searchQuery))
  }

  const change = (id) => {
    console.log("id",id)
    setGenreState(id.id)
    let data = popularMovies.results.map((e)=>e.genre_ids.filter(item=>item == id.id))
    console.log("data",data)

    if(popularMovies.results.map((e)=>e.genre_ids.filter(item=>item == genreState))){
      // setGenreState(<Row>{popularMovies && popularMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>)
 
      console.log("genreState",genreState)
    }
  }

  useEffect(()=>{
    dispatch(MovieAction.getMovies(),
    getMoviesSearch(),
    )
  },[query])

  return (
    <div className='moviecard'>
      <Container>
        <div  className='filter'>
          <h3 className='title'><Dropdown item={popularMovies}/></h3>
        </div>
        <div  className='filter'>
          <h3 className='title'>Filter</h3>
        </div>
        <div className='genres'>
          <h3 className='title'>Genres</h3>
          <p className='genre_button'>{genreList?.map((e)=>(<Button variant="danger" onClick={()=>change(e)}>{e.name}</Button>))}</p>
        </div>
     
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