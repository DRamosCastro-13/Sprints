const divCard = document.getElementById("container");

function createCard(movies){
    const article = document.createElement("article");

    article.className = "flex-col bg-[#4e435e] border-box h-90 w-100 p-4 border-solid border-black border-2 rounded-xl justify-center";
    article.innerHTML = `
        <img class=" object-cover w-100" src="${movies.image}" alt="${movies.title}">
        <h3 class="font-bold text-lg my-1.5">${movies.title}</h3>
        <h4 class="text-sm italic my-1.5">${movies.tagline}</h4>
        <p class="line-clamp-3">${movies.overview}</p>
    `
    return article
}

function renderArticles(movies, divCard) {
    const div = document.createElement('div');

    for (const movie of movies) {
        const article = createCard(movie);
        divCard.appendChild(article);
    }

    divCard.appendChild(div)
}

renderArticles(movies, divCard)