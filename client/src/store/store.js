/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice, configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import { TMDB_BASE_URL, requests, URL } from '../utils/constants'


axios.defaults.withCredentials = false;
const initialState = {
    //  original movies 
    netflixOriginal: [],
    // trending movies 
    netflixTrending: [],
    // top rated movies 
    netflixTopRated: [],
    // action movies 
    netflixAction: [],
    // comedy movies 
    netflixComedy: [],
    // horror movies 
    netflixHorror: [],
    // romance movies 
    netflixRomance: [],
    // documentary movies
    netflixDocumentaries: [],
    // added movies to mylist 
    myList: [],
    //tv shows 
    tvShows: []
}

// fetching original movies from tmdb api 
export const fetchOriginals = createAsyncThunk("netflix/original", async () => {
    try {
        const { data: { results } } = await axios.get(`${TMDB_BASE_URL}${requests.fetchNetflixOriginals}`)
        return results
    } catch (error) {
        console.log(error, "error while calling fetchOriginalapi")
    }
})

// fetching trending movies from tmdb api 
export const fetchTrendings = createAsyncThunk('netlfix/trending', async () => {
    try {
        const { data: { results } } = await axios.get(`${TMDB_BASE_URL}${requests.fetchTrending}`)
        return results;
    } catch (error) {
        console.log(error, 'error while calling fetchTrending api')
    }
})

// fetching top rated movies from tmdb api 
export const fetchTopRated = createAsyncThunk("netflix/topRated", async () => {
    try {
        const { data: { results } } = await axios.get(`${TMDB_BASE_URL}${requests.fetchTopRated}`);
        return results;
    } catch (error) {
        console.log(error, 'error while calling fetchTopRated api');
    }
})

// fetching action movies from tmdb api 
export const fetchAction = createAsyncThunk("netflix/action", async () => {
    try {
        const { data: { results } } = await axios.get(`${TMDB_BASE_URL}${requests.fetchActionMovies}`)
        return results
    } catch (error) {
        console.log(error, "error while calling fetchAction api")
    }
})

// fetching comedy movies from tmdb api 
export const fetchComedy = createAsyncThunk("netflix/comedy", async () => {
    try {
        const { data: { results } } = await axios.get(`${TMDB_BASE_URL}${requests.fetchComedyMovies}`)
        return results
    } catch (error) {
        console.log(error, "error while calling fetchAction api")
    }
})

// fetching horror movies from tmdb api 
export const fetchHorror = createAsyncThunk("netflix/horror", async () => {
    try {
        const { data: { results } } = await axios.get(`${TMDB_BASE_URL}${requests.fetchHorrorMovies}`)
        return results
    } catch (error) {
        console.log(error, "error while calling fetchAction api")
    }
})

// fetching romance movies from tmdb api 
export const fetchRomance = createAsyncThunk("netflix/romance", async () => {
    try {
        const { data: { results } } = await axios.get(`${TMDB_BASE_URL}${requests.fetchRomanceMovies}`)
        return results
    } catch (error) {
        console.log(error, "error while calling fetchAction api")
    }
})

// fetching documentaries movies from tmdb api 
export const fetchDocumentaries = createAsyncThunk("netflix/documentaries", async () => {
    try {
        const { data: { results } } = await axios.get(`${TMDB_BASE_URL}${requests.fetchDocumentaries}`)
        return results
    } catch (error) {
        console.log(error, "error while calling fetchAction api")
    }
})

// fetching getUserLikedMovies movies from database
export const getUsersLikedMovies = createAsyncThunk("netflix/getLiked", async (email) => {
    const { data: { movies } } = await axios.get(`${URL}/auth/getMovies/${email}`);
    return movies;
}
);


// fetching tv shows from tmdb api 
export const fetchTVShows = createAsyncThunk("netflix/tv", async () => {
    try {
        const { data: { results } } = await axios.get(`${TMDB_BASE_URL}${requests.fetchTVShows}`)
        return results
    } catch (error) {
        console.log(error, 'error while calling fetchTVShows Api')
    }
})

// updating deete movies from database 
export const deleteMovie = createAsyncThunk("netflix/delete", async ({ email, movieId }) => {
    try {
        const { data: { movies } } = await axios.put(`${URL}/auth/delete`, { email, movieId })
        return movies
    } catch (error) {
        console.log(error, "error while calling deleteMovie api");
    }
})



// builders for the respective states 
const NetflixSlice = createSlice({
    name: "netflix",
    initialState,
    extraReducers: (builders) => {
        builders.addCase(fetchOriginals.fulfilled, (state, action) => {
            state.netflixOriginal = action.payload
        });
        builders.addCase(fetchTrendings.fulfilled, (state, action) => {
            state.netflixTrending = action.payload
        });
        builders.addCase(fetchTopRated.fulfilled, (state, action) => {
            state.netflixTopRated = action.payload;
        });
        builders.addCase(fetchAction.fulfilled, (state, action) => {
            state.netflixAction = action.payload
        })
        builders.addCase(fetchComedy.fulfilled, (state, action) => {
            state.netflixComedy = action.payload
        });
        builders.addCase(fetchHorror.fulfilled, (state, action) => {
            state.netflixHorror = action.payload
        });
        builders.addCase(fetchRomance.fulfilled, (state, action) => {
            state.netflixRomance = action.payload;
        });
        builders.addCase(fetchDocumentaries.fulfilled, (state, action) => {
            state.netflixDocumentaries = action.payload;
        });
        builders.addCase(getUsersLikedMovies.fulfilled, (state, action) => {
            state.myList = action.payload
        })
        builders.addCase(deleteMovie.fulfilled, (state, action) => {
            state.myList = action.payload
        });
        builders.addCase(fetchTVShows.fulfilled, (state, action) => {
            state.tvShows = action.payload
        })
    }
})


// configuring the store and exporting it 
export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer
    }
})