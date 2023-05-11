import { moviesData } from "../../data/moviesdata";
import { Movie } from "../movie/Movie";

export const Movies = () => {
    return (
        <div>

            <div>Movies Component / Parent</div>
            {moviesData.map(x => <Movie movie={x} key={x.id} />)}

        </div >
    );

};