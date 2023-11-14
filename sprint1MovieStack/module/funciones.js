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
     return `<article class= "flex-col bg-[#4e435e] border-box h-90 w-100 p-4 border-solid border-black border-2 rounded-xl justify-center">
    <img class=" object-cover w-100" src="${movies.image}" alt="${movies.title}">
    <h3 class="font-bold text-lg my-1.5">${movies.title}</h3>
    <h4 class="text-sm italic my-1.5">${movies.tagline}</h4>
    <p class="line-clamp-3">${movies.overview}</p>
    <a href="../pages/details.html?id=${movies.id}" class="text-xs pt-2 text-violet-300" id="detailsButton">Details</a>
</article>`
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
            <img src="${movieDetail.image}" alt="${movieDetail.title}">
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