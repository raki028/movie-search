
var searchBtn = document.getElementById("search-btn")
var movieNameElement = document.getElementById("movie-name")
var movieContainer = document.getElementById("container")
var movieStatusElement = document.getElementById("movie-status")
movieContainer.innerHTML = "<img id = rajinikanth-image src = https://img.freepik.com/premium-vector/cinema-camera-roll-film-logo-design-template_527727-210.jpg>"
searchBtn.addEventListener("click",function(){
    movieContainer.innerHTML = ""
    movieStatusElement.innerText= ""
    movieStatusElement.innerHTML= "<h1> Loading </h1>"
    if(movieNameElement.value == ""){
        alert("please type movie name !!")
        movieStatusElement.innerText= ""
    }else{
axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${movieNameElement.value}`)
.then((res) =>{
    if(res.data.Response == "True"){
        movieStatusElement.innerText= ""
        let movies = res.data.Search
        movies.map((movie,index) =>{
            console.log(movie)
            movieContainer.innerHTML += 
            `<div class = "movieCard" >
            <img
            class="movieThumbnail"
            src="${movie.Poster}"
            />
            <div class = "movieDetailsWrapper">
            <p> <b>Tittle:</b> ${movie.Title} </p>
            <p> <b>Release Year :</b> ${movie.Year} </p>
            </div>

        </div>`
        })
    
    }else{
        movieStatusElement.innerHTML= "<h1> 404 movies not found!! </h1>"
        
    }
})
}
})
