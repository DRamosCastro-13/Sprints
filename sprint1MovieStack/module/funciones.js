export function filterByGenre(movies, genreSelected){
    const filter = movies.filter(movie => movie.genres.includes(genreSelected));
    if(genreSelected == 'All Genres'){
        return movies
    } else {
        return filter
    }
}

export function filterByName(a, name){
    const filter = a.filter(a => a.title.toLowerCase().startsWith(name.toLowerCase()))
    return filter
}

export function createCard(movies){
    let colorFill = "rgba(0, 0, 0, 0.5"
    /*if(array.includes(movies.id)){
        colorFill = "rgb(220 38 38)"
    }
    */
    let article = `
    <article class= "flex flex-col flex-wrap grow lg:grow-0 md:grow-0 bg-[#4e435e] border-box h-90 lg:w-70 lg:flex-wrap md:w-80 w-80 p-4 border-solid border-black border-2 rounded-xl relative">
        <button data-id="${movies.id}" data-boton="fav" type="button" class="absolute right-3 top-2">
            <svg xmlns="http://www.w3.org/2000/svg" data-id="${movies.id}" data-boton="fav"  viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: ${colorFill}); height: 28px; width: 28px; stroke: white; stroke-width: 2; overflow: visible;">
                <path data-id="${movies.id}" data-boton="fav" d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
            </svg>
        </button>
        <img class="object-cover w-100" src= "https://moviestack.onrender.com/static/${movies.image}" alt="${movies.title}">
        <h3 class="font-bold text-lg my-1.5">${movies.title}</h3>
        <h4 class="text-sm italic my-1.5">${movies.tagline}</h4>
        <p class="line-clamp-3">${movies.overview}</p>
        <a href="../pages/details.html?id=${movies.id}" class="text-xs pt-2 text-violet-300" id="detailsButton">Details</a>
    </article>
    `
    return article   
}


export function createTemplate(movies){
    let template = ''
    for (const movie of movies){
        template += createCard(movie)
    } 
    return template
}

export function printTemplate(list, where, fn){
    let template = ''
    for (const i of list){
        template += fn(i)
    } if (template){
        where.innerHTML = template
    } else{
        where.innerHTML = `
        <div class="grid order-1"></div>
        <h2 class="grid order-2 text-3xl font-bold text-purple-200">No movies found...</h2>`
    }   
}

export function optionGenres(separatedGenres){
    return  `<option value="${separatedGenres}">${separatedGenres}</option>`
}

export function printOptions(genres, selectContainer){
    for (const i of genres){
        selectContainer.innerHTML += optionGenres(i)
    }
}

export function createDetail(movieDetail) {
    container.innerHTML = `
    <div class="flex flex-row flex-wrap w-full justify-around">
        <div class="w-5/12">
            <img src="https://moviestack.onrender.com/static/${movieDetail.image}" alt="${movieDetail.title}">
        </div>
        <article class="flex flex-col w-5/12 gap-3">
            <h2 class="text-4xl font-bold">${movieDetail.title}</h2>
            <h3 class="text-2xl">${movieDetail.tagline}</h3>
            <h4 class="text-gray-400">${movieDetail.genres}</h4>
            <p>${movieDetail.overview}</p>
        </article>  
    </div>
    <div class="flex flex-row w-full mt-6 justify-around" >
        <table class="border-collapse w-5/12">
            <tr>
                <td class="border border-slate-100 p-3">Original Language</td>
                <td class="border border-slate-100 p-3">${movieDetail.original_language}</td>
            </tr>
            <tr>
                <td class="border border-slate-100 p-3">Release Date</td>
                <td class="border border-slate-100 p-3">${movieDetail.release_date}</td>
            </tr>
            <tr>
                <td class="border border-slate-100 p-3">Runtime</td>
                <td class="border border-slate-100 p-3">${movieDetail.runtime} minutes</td>
            </tr>
            <tr>
                <td class="border border-slate-100 p-3">Status</td>
                <td class="border border-slate-100 p-3">${movieDetail.status}</td>
            </tr>
        </table>
        <table class="w-5/12 border-collapse">
            <tr>
                <td class="border border-slate-100 p-1">Vote Average</td>
                <td class="border border-slate-100 p-1">${movieDetail.vote_average}</td>
            </tr>
            <tr>
                <td class="border border-slate-100 p-1">Budget</td>
                <td class="border border-slate-100 p-1">${movieDetail.budget}</td>
            </tr>
            <tr>
                <td class="border border-slate-100 p-1">Revenue</td>
                <td class="border border-slate-100 p-1">${movieDetail.revenue}</td>
            </tr>
        </table>
    </div>
    `}