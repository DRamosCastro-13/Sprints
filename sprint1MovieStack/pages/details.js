import {createDetail} from '../module/funciones.js'

const url = `https://moviestack.onrender.com/api/movies`
const apiKey = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
const options = {
    headers: {
        "x-api-key" : apiKey
    }
}

let movies = []
fetch(url, options)
    .then(response => response.json())
    .then(dataAPI => {
        movies = dataAPI.movies;

        const search = location.search
        const params = new URLSearchParams(search)
        const id = params.get('id')

        const movieDetail = movies.find(movie => movie.id === id)
        
        createDetail(movieDetail)

    }).catch(err => console.log(err));