import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Container,Row,Col} from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import Pagination from "react-js-pagination";
import { MovieAction } from '../redux/actions/MovieAction';
import { useSearchParams } from 'react-router-dom'
import Dropdown from"../component/Dropdown";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputRange from 'react-input-range';
import { Slider, RangeSlider } from 'rsuite';
import ReactSlider from "react-slider";
import MultiRangeSlider from "multi-range-slider-react";
const Movies = () => {
  const dispatch = useDispatch()
  // const loading = useSelector((state)=>state.movie)
  const popularMovies = useSelector((state)=>state.movie.popularMovies)
  const searchMovies = useSelector((state)=>state.movie.SearchMovie)
  const genreList = useSelector((state)=>state.movie.genreList)
  const popularTotalMovie = useSelector((state)=>state.movie.popularTotalMovie)
  const [query,setQuery] = useSearchParams()
  const [genreState,setGenreState] = useState("")
  const [sortState,setSortState] = useState("")
  const [ascState,setAscState] = useState("")
  const [descState,setDescState] = useState("")
  const array = popularMovies && popularMovies.results.filter((e)=>e.genre_ids.find(item=>(item == genreState)))
  const [page,setPage] = useState(1)

  // pagenation
  const handlePageChange = (page) => {
    setPage(page);
    dispatch(MovieAction.getPopularTotal(page))
  };

  // search
  const getMoviesSearch =()=>{
    let searchQuery = query.get("query") || ""
    dispatch(MovieAction.getMoviesSearch(searchQuery))
  }

  //genres
   const change = (id) => {
    setGenreState(id.id)
    console.log("d",id)
  }
  
  // sort
   const handleChange = (choice) => {
    setSortState(choice)
    console.log("sortState",sortState)

    // {sortState == "Release Day(asc)"?(<Row>{popularMovies && popularMovies.results.sort((a,b)=>{
    //   if(a.release_date > b.release_date) return 1;
    //   if(a.release_date < b.release_date) return -1;
    //   return 0;
    // }).map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(<Row>
    // {popularMovies && popularMovies.results.sort((a,b)=>{
    //   if(a.release_date < b.release_date) return 1;
    //   if(a.release_date > b.release_date) return -1;
    //   return 0;
    // }).map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>)}
    
  }

  //filter

const [minValue, set_minValue] = useState(1990);
const [maxValue, set_maxValue] = useState(2021);

const handleInput = (e) => {
	set_minValue(e.minValue);
  // console.log("minValue",minValue)
	set_maxValue(e.maxValue);
  console.log("maxValue",maxValue)
  let test = popularMovies.results?.filter((e)=>e.release_date.substring(0,4) == maxValue)
  console.log("test",test)
}


  useEffect(()=>{
    dispatch(MovieAction.getMovies(),
    getMoviesSearch(),
    handlePageChange(),
    )
  },[query])


  return (
    <div className='moviecard'>
      <Container>
        <div  className='filter-sort'>
            <Navbar variant="dark" expand="lg">
              <Container fluid>
                <Navbar.Toggle aria-controls="navbar-dark-example" /> 
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown 
                      id="nav-dropdown-dark-example"
                      title="Sort"
                      menuVariant="dark"
                      className='sort'
                    ><NavDropdown.Item onClick={()=>handleChange("Release Day(Desc)")}>Release Day(Desc)</NavDropdown.Item>
                      <NavDropdown.Item onClick={()=>handleChange("Release Day(asc)")}>Release Day(asc)</NavDropdown.Item> 
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <h3 className='title' />
            <h5>SortBy:{sortState}</h5>
        </div>
        <div  className='filter'>
          <h2 className='title'><b>Filter</b></h2>
          <h4>Year</h4>
          <h5>From:<b>1990</b> - To:<b>{maxValue}</b></h5>
          <div  className="slider">
            <MultiRangeSlider
              min={1990}
              max={2021}
              step={5}
              ruler={false}
              label={false}
              // preventWheel={false}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {handleInput(e);}}
            />
          </div>
        </div>

        <div className='genres'>
          <h3 className='title'><b>Genres</b></h3>
          <p className='genre_button'>{genreList?.map((e)=>(<Button variant="danger" className="movie-genre" 
          onClick={()=>change(e)}>{e.name}</Button>))}</p>
        </div>
     
      </Container>
      <Container>
          <div>
          {sortState == "Release Day(asc)"?(<Row>{popularMovies && popularMovies.results.sort((a,b)=>{
          if(a.release_date > b.release_date) return 1;
          if(a.release_date < b.release_date) return -1;
          return 0;
           }).map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(
            searchMovies?(<Row>{searchMovies && searchMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):
            (genreState?(<Row>{array && array.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(
            popularTotalMovie?(<Row>{popularTotalMovie && popularTotalMovie.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(
            <Row>{popularMovies && popularMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>)
            )))}

            {/* {(function(){
              if(popularTotalMovie != null){
                return(<Row>{popularTotalMovie && popularTotalMovie.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>)
              }else if(genreState != null){
                return(<Row>{searchMovies && searchMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>)
              }
            })()} */}



         </div>

         <div>
          <Pagination className="page"
            activePage={page}
            itemsCountPerPage={20}
            totalItemsCount={10000}
            pageRangeDisplayed={5}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={handlePageChange}
          />
        </div>
      </Container>

    </div>
  )
}

export default Movies