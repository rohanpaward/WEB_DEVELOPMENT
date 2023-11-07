
let api="http://www.omdbapi.com/?apikey=56d3df13&t="

let title = document.getElementById('title')
let director = document.getElementById('director')
let actor = document.getElementById('actors')
let collection = document.getElementById('collection')
let desc = document.getElementById('desc')
let awards = document.getElementById('awards')
let writer = document.getElementById('writer')
let rating = document.getElementById('rating')
let genere = document.getElementById('genere')
let release = document.getElementById('release')
let poster = document.getElementById('poster')

function searchmovie(){
    let moviename=document.getElementById('MovieName')
    let query=api+moviename.value
    fetch(query).then((data)=>{
        return data.json()
       }).then((data)=>{
       title.innerText=data.Title
       director.innerText=data.Director
       actor.innerText=data.Actors
       collection.innerText=data.BoxOffice
       desc.innerText=data.Plot
       awards.innerText=data.Awards
       writer.innerText=data.Writer
       rating.innerText=data.imdbRating
       genere.innerText=data.Genre
       release.innerText=data.Released
       poster.src=data.Poster
       })
}

