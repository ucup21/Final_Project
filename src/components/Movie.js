import React from 'react';

const Movie = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='movie'>
                    <p>{movie.Title}</p>
                    <div>
                        <img width={250} src={movie.Poster} alt='movie'></img>
                    </div>
				</div>
			))}
		</>
	);
};

export default Movie;