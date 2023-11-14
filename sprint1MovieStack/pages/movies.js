import{printOptions, printTemplate, optionGenres, createTemplate, filterByGenre, filterByName, createCard} from '../module/funciones.js'

const divCard = document.getElementById("container");
const selectContainer = document.getElementById('genresDropdown')
const repeatedGenres = movies.map(movie => movie.genres)
const separatedGenres = new Set (repeatedGenres.flat())


    separatedGenres.add('All Genres')
for(const movie of movies) {
    separatedGenres.add(...movie.genres)
}

printOptions(separatedGenres, selectContainer)

printTemplate(separatedGenres, selectContainer, optionGenres)

const inputMovieName = document.getElementById('inputMovieName')

divCard.innerHTML += createTemplate(movies)


inputMovieName.addEventListener('keyup', () => {
    const filteredByName = filterByName(movies, inputMovieName.value);
    const filteredByGenre = filterByGenre(filteredByName, selectContainer.value)
    printTemplate(filteredByGenre, divCard, createCard)
})

selectContainer.addEventListener('change', () => {
    const selectedGenre = selectContainer.value;
    const checked = []
    for (const i of selectedGenre){
        if(i.checked){
            checked.push(i.value)
        }
    }
    const filteredByGenre = filterByGenre(movies, selectedGenre);
    const filteredByName = filterByName(filteredByGenre, inputMovieName.value);
    printTemplate(filteredByName, divCard, createCard)    
})

