import { useEffect, useState } from "react"
import axios from "../lib/axios"
function Row({
    title, fetchUrl, isLargeRow = false
}) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
setMovies(request.data.results)
        }
    })
    return (
        <div>

        </div>
    )
}

export default Row