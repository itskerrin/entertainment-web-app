import movieIcon from '../assets/icon-category-movie.svg';
import tvIcon from '../assets/icon-category-tv.svg';
import '../components/styles/components/_thumbnaillarge.scss';

const ThumbnailLarge = ({ trending }) => {
    return (
        <>
            <div
                id="thumbnail-container"
                style={{
                    backgroundImage: `url(${trending.thumbnail.regular.large})`,
                }}
            >
                <div id="lrg-info-wrapper">
                    <div id="lrg-info">
                        <p>{trending.year}</p>
                        <span>•</span>
                        {trending.category === 'Movie' ? (
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
                        <p>{trending.rating}</p>
                    </div>
                    <div id="lrg-title">{trending.title}</div>
                </div>
            </div>
        </>
    );
};

export default ThumbnailLarge;
