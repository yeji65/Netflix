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

const Movies = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector((state)=>state.movie.popularMovies)
  const searchMovies = useSelector((state)=>state.movie.SearchMovie)
  const genreList = useSelector((state)=>state.movie.genreList)
  // const [page, setPage] = useState(1);
  const [query,setQuery] = useSearchParams()
  const [genreState,setGenreState] = useState("")
  const [userSelect,setUserSelect] = useState("")
  const array = popularMovies.results.filter((e)=>e.genre_ids.find(item=>(item == genreState)))

  // const handlePageChange = (page) => {
  //   setPage(page);
  //   console.log(page)
  // };

  const getMoviesSearch =()=>{
    let searchQuery = query.get("query") || ""
    dispatch(MovieAction.getMoviesSearch(searchQuery))
  }

   const change = (id) => {
    setGenreState(id.id)
    console.log("id",id)
  }

   

  //  let dataSort = popularMovies.results?.map((e)=>e.release_date).sort() 
  //  console.log("dataSort",dataSort)

   const handleChange = () => {
    // console.log("popularMovies",popularMovies)
    // let list = {...popularMovies}
    // list.results.map((e)=>e.release_date).sort() 
    // // setUserSelect(list);
    // console.log("list123456",list)

    
    // {(userSelect == "Release Day(Desc)")?(item.item.results.release_date.sort()):""}
    // <Row>{popularMovies && popularMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>)).release_date}</Row>
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
          <h3 className='title'>
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
                    >
                      <NavDropdown.Item onClick={()=>handleChange()}>Popularity(Desc)</NavDropdown.Item>
                      <NavDropdown.Item onClick={()=>handleChange("Popularity(asc)")}>Popularity(asc)</NavDropdown.Item>
                      <NavDropdown.Item onClick={()=>handleChange("Release Day(Desc)")}>Release Day(Desc)</NavDropdown.Item>
                      <NavDropdown.Item onClick={()=>handleChange("Release Day(asc)")}>Release Day(asc)</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </h3>
        </div>
        <div  className='filter'>
          <h3 className='title'>Filter</h3>
        </div>
        <div className='genres'>
          <h3 className='title'>Genres</h3>
          <p className='genre_button'>{genreList?.map((e)=>(<Button variant="danger" className="movie-genre" 
          onClick={()=>change(e)}>{e.name}</Button>))}</p>
        </div>
     
      </Container>
      <Container>
        {/* {userSelect == "Release Day(asc)"?(
        <Row>{popularMovies.results?.map((e)=><Col lg={6}><ProdctCard_Sort item={e} /></Col>).sort() }</Row>
        ):( */}
          <div>
            {genreState?(<Row>{array && array.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>)
            :(
            searchMovies?(
            <Row>{searchMovies && searchMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(
            <Row>{popularMovies && popularMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>
            )
            )}
        </div>
      {/* )} */}
    
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