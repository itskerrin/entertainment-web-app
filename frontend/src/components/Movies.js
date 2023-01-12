import Thumbnail from './Thumbnail';
import '../components/styles/pages/_movies.scss';

const Movies = ({ moviesAndShows, searchTerm }) => {
    return (
        <>
            <h1 id="movies-title">Movies</h1>
            <div id="movies-content">
                {moviesAndShows
                    .filter((item) => {
                        return item.category.toLowerCase().includes('movie');
                    })
                    .filter((result) => {
                        return searchTerm.toLowerCase() === ''
                            ? result
                            : result.title.toLowerCase().includes(searchTerm);
                    })
                    .map((movieOrTVShow, idx) => (
                        <div className="movie-card" key={idx}>
                            <Thumbnail movieOrTVShow={movieOrTVShow} />
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Movies;
