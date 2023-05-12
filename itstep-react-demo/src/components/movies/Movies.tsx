import { useState } from "react";
import { moviesData } from "../../data/MoviesData";
import { Movie as MovieInterface } from "../../interfaces/Movie";
import { Movie as MovieItem } from "../movie/Movie";

export function Movies() {

    const [data, setData] = useState(Array<MovieInterface>);
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setData(moviesData);
        setIsLoading(false);
    }, 5000)


    return (
        <div>

            <div>Movies Component / Parent</div>
            {isLoading && <p>Loading...</p>}
            {!isLoading && data.map(x => <MovieItem movie={x} key={x.id} />)}

        </div >
    );

};