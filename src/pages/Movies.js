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
import ClipLoader from "react-spinners/ClipLoader";

const Movies = () => {
  const dispatch = useDispatch()
  // const {popularMovies,searchMovies,genreList,loading,popularTotalMovie} = useSelector((state)=>state.movie)
  const popularMovies = useSelector((state)=>state.movie.popularMovies)
  const searchMovies = useSelector((state)=>state.movie.SearchMovie)
  const genreList = useSelector((state)=>state.movie.genreList)
  const popularTotalMovie = useSelector((state)=>state.movie.popularTotalMovie)
  const [query,setQuery] = useSearchParams()
  const [genreState,setGenreState] = useState("")
  const [sortState,setSortState] = useState("")
  const [input,setInput] = useState("")
  const [ascState,setAscState] = useState("")
  const [descState,setDescState] = useState("")
  const array = popularMovies && popularMovies.results.filter((e)=>e.genre_ids.find(item=>(item == genreState)))
  const [page,setPage] = useState(1)

  const handlePageChange = (page) => {
    setPage(page);
    console.log("page",page)
    dispatch(MovieAction.getPopularTotal(page))
    console.log("popularTotalMovie",popularTotalMovie)
    
  };



  const getMoviesSearch =()=>{
    let searchQuery = query.get("query") || ""
    dispatch(MovieAction.getMoviesSearch(searchQuery))
  }

   const change = (id) => {
    setGenreState(id.id)
  }



  //  const handleChange = (choice) => {
  //   setSortState(choice)
  //   console.log("sortState",sortState)
    
  //   const asc = popularMovies.results.sort((a,b)=>{
  //     if(a.release_date > b.release_date) return 1;
  //     if(a.release_date < b.release_date) return -1;
  //     return 0;
  //   })
  //   setAscState(asc)
  //   console.log("ascState",ascState)

  //   const desc = popularMovies.results.sort((a,b)=>{
  //     if(a.release_date < b.release_date) return 1;
  //     if(a.release_date > b.release_date) return -1;
  //     return 0;
  //   })

  //   setDescState(desc)
  //   console.log("descState",descState)

  //   // {sortState == "Popularity(asc)"?<Row>{asc && asc.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>:
  //   // <Row>{desc && desc.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>}
  // if(sortState == "Popularity(asc)"){
  //   return <Row>{ascState && ascState.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>
  // }
  //   else{
  //     return <Row>{descState && descState.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>}
    
  // }


  const asc = (choice) => {
    setAscState(choice)  
    console.log("ascState",ascState)  
    const asc = popularMovies.results.sort((a,b)=>{
      if(a.release_date > b.release_date) return 1;
      if(a.release_date < b.release_date) return -1;
      return 0;
    })

  // {ascState?(<Row>{asc && asc.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(
  //   <Row>{desc && desc.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>)}
    
  }


  const desc = (choice) => {
    setDescState(choice)
    console.log("descState",descState)

    const desc = popularMovies.results.sort((a,b)=>{
      if(a.release_date < b.release_date) return 1;
      if(a.release_date > b.release_date) return -1;
      return 0;
    })
    // console.log("desc",desc)
    // {descState?(<Row>{desc && desc.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(
    //   <Row>{asc && asc.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>)}
  }

  useEffect(()=>{
    dispatch(MovieAction.getMovies(),
    getMoviesSearch(),
    handlePageChange(),
    )
  },[query])

  // if(loading){
  //   return <ClipLoader color="#ffff" loading={loading} size={150} />
  // }
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
                      <NavDropdown.Item onClick={()=>asc()}>Popularity(asc)</NavDropdown.Item>
                      <NavDropdown.Item onClick={()=>desc()}>Popularity(desc)</NavDropdown.Item>
                      {/* <NavDropdown.Item onClick={()=>handleChange("Release Day(Desc)")}>Release Day(Desc)</NavDropdown.Item>
                      <NavDropdown.Item onClick={()=>handleChange("Release Day(asc)")}>Release Day(asc)</NavDropdown.Item> */}
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </h3>
            <div>sortState:{sortState}</div>
        </div>
        <div  className='filter'>
          <h3 className='title'>Filter</h3>
          {/* <InputRange
        maxValue={20}
        minValue={0}
        value={{min:2,max:10}}
        onChange={value =>setInput({ value })} /> */}
        </div>
        <div className='genres'>
          <h3 className='title'>Genres</h3>
          <p className='genre_button'>{genreList?.map((e)=>(<Button variant="danger" className="movie-genre" 
          onClick={()=>change(e)}>{e.name}</Button>))}</p>
        </div>
     
      </Container>
      <Container>
          <div>
          {/* {popularTotalMovie?(<Row>{popularTotalMovie && popularTotalMovie.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(
      
            genreState?(<Row>{array && array.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>)
            :(
            searchMovies?(
            <Row>{searchMovies && searchMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(
            <Row>{popularMovies && popularMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>
            )
            )
            )} */}
            {searchMovies?(<Row>{searchMovies && searchMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):
            (genreState?(<Row>{array && array.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(
            popularTotalMovie?(<Row>{popularTotalMovie && popularTotalMovie.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>):(
            <Row>{popularMovies && popularMovies.results.map((item)=>(<Col lg={6}><ProductCard item={item} /></Col>))}</Row>)
            ))}
      
            
        </div>
    
         <div>
        <Pagination
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={popularMovies.total_pages}
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