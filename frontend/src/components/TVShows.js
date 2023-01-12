import Thumbnail from './Thumbnail';
import '../components/styles/pages/_tvshows.scss';

const TVShows = ({ moviesAndShows, searchTerm }) => {
    return (
        <>
            <h1 id="tv-title">TV Shows</h1>
            <div id="tv-content">
                {moviesAndShows
                    .filter((item) => {
                        return item.category
                            .toLowerCase()
                            .includes('tv series');
                    })
                    .filter((result) => {
                        return searchTerm.toLowerCase() === ''
                            ? result
                            : result.title.toLowerCase().includes(searchTerm);
                    })
                    .map((movieOrTVShow, idx) => (
                        <div className="tv-card" key={idx}>
                            <Thumbnail movieOrTVShow={movieOrTVShow} />
                        </div>
                    ))}
            </div>
        </>
    );
};

export default TVShows;
