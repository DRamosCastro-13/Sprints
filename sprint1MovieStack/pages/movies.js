import{printOptions, printTemplate, optionGenres, createTemplate, filterByGenre, filterByName, createCard} from '../module/funciones.js'

const url = `https://moviestack.onrender.com/api/movies`
const apiKey = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
const options = {
    headers: {
        "x-api-key" : apiKey
    }
}
let movies = []
const divCard = document.getElementById("container");
const selectContainer = document.getElementById('genresDropdown');
const inputMovieName = document.getElementById('inputMovieName');

fetch(url, options)
    .then(response => response.json())
    .then(dataAPI => {
        movies = dataAPI.movies;
        const repeatedGenres = movies.map(movie => movie.genres);
        const separatedGenres = new Set (repeatedGenres.flat());
        separatedGenres.add('All Genres');
        
        for(const movie of movies) {
            separatedGenres.add(...movie.genres)
        }
        
        printOptions(separatedGenres, selectContainer);
        
        printTemplate(separatedGenres, selectContainer, optionGenres);
        
        divCard.innerHTML += createTemplate(movies);
    })
    .catch(err => console.log(err));



inputMovieName.addEventListener('keyup', () => {
    const filteredByName = filterByName(movies, inputMovieName.value);
    const filteredByGenre = filterByGenre(filteredByName, selectContainer.value)
    printTemplate(filteredByGenre, divCard, createCard)
})

selectContainer.addEventListener('change', () => {
    const selectedGenre = selectContainer.value;
    const filteredByGenre = filterByGenre(movies, selectedGenre);
    const filteredByName = filterByName(filteredByGenre, inputMovieName.value);
    printTemplate(filteredByName, divCard, createCard)    
})

let favoriteMovies = JSON.parse(localStorage.getItem('favorites')) || []


divCard.addEventListener('click', (e)=>{
    const botonFav = e.target.dataset.boton
    const botonFavId = e.target.dataset.id
    if(botonFav == 'fav'){
        if(favoriteMovies.includes(botonFavId)){
            favoriteMovies.splice(favoriteMovies.indexOf(botonFavId), 1);
            e.target.setAttribute('fill' , 'rgba(0, 0, 0, 0.5)')

        } else {
            favoriteMovies.push(botonFavId)
            e.target.setAttribute('fill', 'rgb(220 38 38)')
        }
        localStorage.setItem('favorites', JSON.stringify(favoriteMovies) )
        
    }
})

