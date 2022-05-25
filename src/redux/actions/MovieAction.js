import api from "../api"

const API_KEY = process.env.REACT_APP_API_KEY
function getMovies(){
    return async(dispatch)=>{
       try{
        dispatch({type:"get_movies_request"})
        const popularApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        
        let [popularMovies,topRatedMovies,upcomingMovies,genreList] = await Promise.all([popularApi,topRatedApi,upComingApi,genreApi])
        console.log("genreList",genreList)
        dispatch({
            type:"get_movies_success",
            payload:{popularMovies:popularMovies.data,
                topRatedMovies:topRatedMovies.data,
                upcomingMovies:upcomingMovies.data,
                genreList:genreList.data.genres}
        })
       }catch(error){
        dispatch({type:"get_movies_falure"})
       }
    }
}

function getMoviesDetail(id){
    
    return async(dispatch)=>{
        try{
            dispatch({type:"get_single_movies_request"})
            const getDetailApi = await api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
            console.log("내가만든 getDetailApi",getDetailApi)
            dispatch({
                type:"get_single_movies_success",
                payload:{getDetailApi:getDetailApi.data}
                })
        }catch(error){
                dispatch({type:"get_single_movies_falure"})
               }

            }
        }
        
    export const MovieAction = {getMovies,getMoviesDetail};


        // axius("/movie/popular?api_key=<<api_key>>&language=en-US&page=1"
        // let response = await fetch(url)
        // let data = await response.json()
        
        // let url2 = "/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1"
        // let response = await fetch(url)
        // let data = await response.json()

        // let url3 = "/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"
        // let response = await fetch(url)
        // let data = await response.json()
