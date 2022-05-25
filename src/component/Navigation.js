import React from 'react'
import {Navbar,Container,Form,Button,Nav,NavDropdown,FormControl} from "react-bootstrap"
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
      <img 
      width = {100}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAB3CAMAAABBlu4tAAAAaVBMVEUAAADjCRTnCRSwBw/rCRWWBg02AgXLCBJPAwd7BQvdCBTFCBLgCRRvBArYCBMkAQQIAAGDBgwYAQG7BxEgAQNEAwbyCRWfBg2oBg/TCBNVAwi1Bw89AwZeBAh0BQppBAkpAQQuAgSNBQ2kxrxQAAAEEElEQVR4nO2ZaZeqOBBAIQSQRRtRWWWR//8jH6kiLMIbdaxmzplT90N3iCHxhlBU0DAYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmH+rzysnvI8HHmlOmygnFoLoE1VWk+UjmHE2VNdp5uW9XK0O1TaUV+MsKti+KS6qKOsJVByhOw5DV3ZiTpCwVwuSLK+rpbPJPdeKXyqK9XsqK4SezlaAZ9flJIRJLpXhQsnWhGFUihM00yGybJlfyBQyVUfTEg1+HFZp6qVkr+sE5ZSUl3JJ6WDOl+gUiOhLUoUeGZDYDQoiXJ/pQcMkOBgFnwQUBgNSmYY765kZHDgquLtBHpPd953SoPGK6WaUukGjcNqHNcnMRqVymhTKTwfB2p1uzm1KjY4vVCur1rJbxZNXyvhCCLtS6YqyY5WKTxsK923ToJWQawPUem0bPOGUp2oo9OjD6RQOJAqmRi510q3vyv9fKv0g3fQ0QigOjNo0Eoi31/JSLEjjOAJ0UUalUz1zNxbqQphNuEiSZoIPleS6f5KQ1SFP5LkMbtQEm67vxI0moanYVSCbGSt5PyqkjEpEUVwY66knqXrR22WIotgvqlk5oh7+EDJ0k7h4xeURJ8UrZV0dl3MT9pWEoj5iVIlpvmkVYKOk+YfEqI3lPR8f6LUBjhKsnnPfqEkghC+5P5KRodbDIvOaFAqSzWW/yBQ+mzh9ZtCOMkjV7pUkG6du5WSvkHeUPKR00dKmaC+lfTCe6h0S1jrq9R5yCIg/SWIx8A1+kDplg9roSVXiiHd8rNPMnGK55J+1kqa3R+glRpYZZhz7Zc9GL7OXXIqoVHpGudjNNhRqUjGsFKRK2Giv7dSMM1jSq90T/ZXGjYXUJlvZpNfKY3LevctYA5rXh7plTq5t9ID36I0+Ohw6ZWKzYUHyyF2isabbdHeVhJ5aWWZ3XlN4ayVzvgWpa0wjlPl4pNSdBFrJdM9hSIBZmnY20qQfcDb7kRGKyU4TV1I3KlTBYhJybC3lITYSP8/UBqB944LJQ/f8x705XKJLtNMydlSGiFXimFVSEt3aAqiADFT0hJvKKnl5E5KsLbCD5Vw94cbJdjcypJeSS//hdKQik+/BCklv9+QW9dRSe3ks6dbwcObqAf+i/BZKZvFOdSTFL8uLZUcf66U999DmP7JdYOLlaX2v3kpFbX3Q3X0OjvNMggPfj9FSaCKMS42TFevAeFL8blSVMKMJtiz3Z2PTVUcnJZm8hRxUTXHc606TPsgKmU+hAR7+mHmaxyVk0gXF1GdB5Z9rn5enEOEU3m23s0+MLKSBAinf+rIU3Z93fJ3sYOc6rfa1vZuThu/bvjbXFvnVp93WiAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzD/AX8A/UVJ5w+pPrcAAAAASUVORK5CYII="/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/Movies" className='nav-item'>Movies</Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-danger">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation