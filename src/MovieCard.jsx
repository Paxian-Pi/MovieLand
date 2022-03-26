import React from 'react'

const MovieCard = ({ mov: { Title, Year, imdbID, Type, Poster } }) => {

    const noImagePlaceholder = 'http://via.placeholder.com/400';

    return (
        <div className="movie">
            <div>
                <p>{Year}</p>
            </div>

            <div>
                <img
                    src={
                        Poster !== 'N/A'
                            ? Poster
                            : noImagePlaceholder
                    }
                    alt={Title}
                />
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard