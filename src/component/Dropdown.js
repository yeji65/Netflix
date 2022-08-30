import react,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Movies from '../pages/Movies';

function NavbarDarkExample(item) {
// const Popularity = item.item.results.map((id)=>id.popularity)
console.log("item",item.item)
console.log("sort",item.item.results.map((e)=>e.release_date).sort())
const [userSelect,setUserSelect] = useState("")
  // const Popularity 

  const handleChange = (userChoice) => {
    setUserSelect(userChoice)
    console.log(userSelect)

    // {(userSelect == "Release Day(Desc)")?(item.item.results.release_date.sort()):""}
  } 

  // useEffect(()=>{
  //  },[userSelect])
  

  return (
    <div>
    <Navbar variant="dark" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
        <Navbar.Toggle aria-controls="navbar-dark-example" /> 
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown 
              id="nav-dropdown-dark-example"
              title="Sort"
              menuVariant="dark"
              className='sort'
            >
              <NavDropdown.Item onClick={()=>handleChange("Popularity(Desc)")}>Popularity(Desc)</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>handleChange("Popularity(asc)")}>Popularity(asc)</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>handleChange("Release Day(Desc)")}>Release Day(Desc)</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>handleChange("Release Day(asc)")}>Release Day(asc)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {userSelect}
    </div>
    
    </div>
  );
}

export default NavbarDarkExample;