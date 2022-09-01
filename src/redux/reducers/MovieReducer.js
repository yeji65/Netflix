let initalState={
    popularMovies:"",
    topRatedMovies:"",
    upcomingMovies:"",
    loading:true,
    genreList:[],
    selectedMovie:null,
    reviewedMovie:null,
    RecommendationMovie:null,
    VideosMovie:null,
    SearchMovie:null,
    popularTotalMovie:null,
}

function MoviesReducer(state=initalState,action){
    let {type,payload} = action
    switch(type){
        case "get_movies_request":
            return{...state,loading:true}
        case "get_movies_success":
            return{...state,
                popularMovies:payload.popularMovies,
                topRatedMovies:payload.topRatedMovies,
                upcomingMovies:payload.upcomingMovies,
                genreList:payload.genreList,
                loading:false}
        case "get_single_movies_request":
            return{...state,loading:true}
        case "get_single_movies_success":
            return{...state,
                selectedMovie:payload.getDetailApi,
                }
        case "get_single_moviesReview_request":
            return{...state,loading:true}
        case "get_single_moviesReview_success":
            return{...state,
                reviewedMovie:payload.getReviewApi,
            }

        case "get_single_moviesRecommendation_request":
            return{...state,loading:true}
        case "get_single_moviesRecommendation_success":
            return{...state,
                RecommendationMovie:payload.getRecommendationApi,
            }

        case "get_single_moviesVideos_request":
            return{...state,loading:true}
        case "get_single_moviesVideos_success":
            return{...state,
                VideosMovie:payload.getVideosApi,
            }

        case "get_search_request":
            return{...state,loading:true}
        case "get_search_success":
            return{...state,
                SearchMovie:payload.getSearchApi,
            }

        case "get_populartotal_request":
            return{...state,loading:true}
        case "get_populartotal_success":
            return{...state,
                popularTotalMovie:payload.popularTotalApi,
                }
                
        case "get_movies_falure":
            return {...state,loading:false}
        default:
            return {...state}
    }
}
export default MoviesReducer;