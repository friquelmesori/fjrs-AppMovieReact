import axios from "axios";

const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`

export const bringPeliculas = async () => {
    let {data} = await axios.get(`${URL}`)

    // Enseña lo que hay en data en la linea 6
    console.log(data);

    return data.results;
}