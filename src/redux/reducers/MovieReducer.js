let initalState={
    popularMovies:"",
    topRatedMovies:"",
    upcomingMovies:"",
    loading:true,
    genreList:[],
    selectedMovie:null
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
        case "get_movies_falure":
            return {...state,loading:false}
        default:
            return {...state}
    }
}
export default MoviesReducer;