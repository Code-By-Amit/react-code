export async function getMovieData ({params}){
    const id = params.movieID;
    try {
        const res =await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
        let data = await res.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}