import React from 'react'
import {useSelector } from 'react-redux'
import { Badge } from 'react-bootstrap'
const ProductCard = ({item}) => {
    const genreList = useSelector((state)=>state.movie.genreList)
  return (
    <div className='moviebanner'  
    style={{backgroundImage:
        "url("+`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item?.poster_path}`+")"}}>
        <div className='movietext'>
            <h2>{item?.title}</h2>
            <div>{item.genre_ids.map((id)=>(<Badge bg="danger">{genreList.find((item)=>item.id == id).name}</Badge>))}</div>

            <p> {item?.overview}</p>
        </div>
    </div>
  )
}

export default ProductCard