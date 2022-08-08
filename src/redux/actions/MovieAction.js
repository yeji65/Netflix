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

function getMoviesSearch(searchQuery){
    
    return async(dispatch)=>{
            try{
                dispatch({type:"get_search_request"})
                const getSearchApi = await api.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
                console.log("내가만든 getSearchApi",getSearchApi)
                dispatch({
                    type:"get_search_success",
                    payload:{getSearchApi:getSearchApi.data}
                    })
                    }catch(error){
                        dispatch({type:"get_search_falure"})
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

function getMoviesReview(id){
    
    return async(dispatch)=>{
        try{
            dispatch({type:"get_single_moviesReview_request"})
            const getReviewApi = await api.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
            console.log("내가만든 getreviewApi",getReviewApi)
            dispatch({
                type:"get_single_moviesReview_success",
                payload:{getReviewApi:getReviewApi.data}
                })
                }catch(error){
                        dispatch({type:"get_single_moviesReview_falure"})
                       }
        
                    }
                }

function getMoviesRecommendation(id){
    
    return async(dispatch)=>{
            try{
                dispatch({type:"get_single_moviesRecommendation_request"})
                const getRecommendationApi = await api.get(`movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
                console.log("내가만든 getRecommendationApi",getRecommendationApi)
                dispatch({
                    type:"get_single_moviesRecommendation_success",
                    payload:{getRecommendationApi:getRecommendationApi.data}
                    })
                    }catch(error){
                        dispatch({type:"get_single_moviesRecommendation_falure"})
                            }
                        
                        }
                    }


function getMoviesVideos(id){
    
    return async(dispatch)=>{
            try{
                dispatch({type:"get_single_moviesVideos_request"})
                const getVideosApi = await api.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
                console.log("내가만든 getVideosApi",getVideosApi)
                dispatch({
                    type:"get_single_moviesVideos_success",
                    payload:{getVideosApi:getVideosApi.data}
                    })
                    }catch(error){
                        dispatch({type:"get_single_moviesVideos_falure"})
                            }
                                            
                        }
                    }


                    

        
    export const MovieAction = {getMovies,getMoviesDetail,getMoviesReview,getMoviesRecommendation,getMoviesVideos,getMoviesSearch};


        // axius("/movie/popular?api_key=<<api_key>>&language=en-US&page=1"
        // let response = await fetch(url)
        // let data = await response.json()
        
        // let url2 = "/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1"
        // let response = await fetch(url)
        // let data = await response.json()

        // let url3 = "/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"
        // let response = await fetch(url)
        // let data = await response.json()
