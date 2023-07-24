import axios from "axios";

const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`
const filmById = `https://api.themoviedb.org/3/movie/`
const serieById = `https://api.themoviedb.org/3/tv/`

export const bringPeliculas = async () => {
    let {data} = await axios.get(`${URL}`)

    // Enseña lo que hay en data en la linea 6
    console.log("bringPeliculas", data);

    return data.results;
}

const ApiKey = "210d6a5dd3f16419ce349c9f1b200d6d"
const top20Pelis = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`

export const bringTop20 = async () => {
    let {data} = await axios.get(`${top20Pelis}`)

    // Enseña lo que hay en data en la linea 17
    // console.log(data);
    console.log("bringTop20", data);

    return data.results;
}

const series = `https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}`

export const bringSeries = async () => {
    let {data} = await axios.get(`${series}`)

    // Enseña lo que hay en data en la linea 30
    // console.log(data);
    console.log("bringSeries", data);

    return data.results;
}


