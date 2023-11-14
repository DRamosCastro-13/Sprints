import {createDetail} from '../module/funciones.js'

const search = location.search
const params = new URLSearchParams(search)
const id = params.get('id')
const container = document.getElementById('container')

const movieDetail = movies.find(movie => movie.id === id)

createDetail(movieDetail)