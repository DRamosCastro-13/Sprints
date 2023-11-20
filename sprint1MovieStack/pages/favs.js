import{createCard, createTemplate, printTemplate} from '../module/funciones.js'

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
        let favoriteMovies = JSON.parse(localStorage.getItem('favorites')) || [];
        let favoritesPrint = [];

        for(const movie of movies){
            if(favoriteMovies.includes(movie.id)){
                favoritesPrint.push(movie)
                
            }
        }

        const containerFavs = document.getElementById('containerFavs');
        printTemplate(favoritesPrint, containerFavs, createCard);
        

        containerFavs.addEventListener('click', (e)=>{
            const botonFav = e.target.dataset.boton
            if(botonFav == 'fav'){
                const botonFavId = e.target.dataset.id
                if(favoriteMovies.includes(botonFavId)){
                    favoriteMovies.splice(favoriteMovies.indexOf(botonFavId), 1);
                    e.target.setAttribute('fill' , 'rgba(0, 0, 0, 0.5)');
                } else {
                    favoriteMovies.push(botonFavId)
                    e.target.setAttribute('fill', 'rgb(220 38 38)');   
                }
                localStorage.setItem('favorites', JSON.stringify(favoriteMovies) )
            }
        })
        
        
    })
    .catch(err => console.log(err));
