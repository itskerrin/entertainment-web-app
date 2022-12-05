import movieIcon from '../assets/icon-category-movie.svg';
import tvIcon from '../assets/icon-category-tv.svg';
import './styles/components/_thumbnail.scss';

const Thumbnail = ({ movieOrTVShow }) => {
    return (
        <>
            <div id="thumbnail-regular">
                <img
                    src={movieOrTVShow.thumbnail.regular.medium}
                    alt="thumbnail"
                />
            </div>
            <div>
                <div id="info-wrapper">
                    <div id="info">
                        <p>{movieOrTVShow.year}</p>
                        <span>•</span>
                        {movieOrTVShow.category === 'Movie' ? (
                            <p id="category">
                                <img src={movieIcon} alt="movie" /> Movie
                            </p>
                        ) : (
                            <p id="category">
                                <img
                                    src={tvIcon}
                                    alt="movie"
                                    style={{ width: '40%' }}
                                />
                                TV
                            </p>
                        )}
                        <span>•</span>
                        <p>{movieOrTVShow.rating}</p>
                    </div>
                    <div id="title">{movieOrTVShow.title}</div>
                </div>
            </div>
        </>
    );
};

export default Thumbnail;
