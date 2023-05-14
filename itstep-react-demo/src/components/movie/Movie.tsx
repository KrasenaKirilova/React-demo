import { useState } from "react";

export const Movie = (props: any) => {


    const { title, year, genre, plot, poster } = props.movie;
    
    const [marked, setMarked] = useState(false);

    const markedMovie = ()=> {
        setMarked(marked => !marked);
    }

    return (
        <div onClick={markedMovie} style={marked ? {backgroundColor : 'red' } : {backgroundColor : 'white'}}>
            <h2>{title}</h2>
            <p>{year}</p>
            <p>{genre}</p>
            <p>{plot}</p>
            <img src={poster} />
        </div>
    );
};