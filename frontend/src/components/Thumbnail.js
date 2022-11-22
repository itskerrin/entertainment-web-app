import medium from '../assets/medium.jpg';
import './styles/components/_thumbnail.scss';
import movieIcon from '../assets/icon-category-movie.svg';

const Thumbnail = () => {
    return (
        <>
            <div
                id="thumbnail-regular"
                style={{
                    backgroundImage: `url(${medium})`,
                }}
            ></div>
            <div>
                <div id="info-wrapper">
                    <div id="info">
                        <p>2002</p>
                        <span>•</span>
                        <p id="category">
                            <img src={movieIcon} alt="movie" /> Movies
                        </p>
                        <span>•</span>
                        <p>PG 13</p>
                    </div>
                    <div id="title">During the hunt</div>
                </div>
            </div>
        </>
    );
};

export default Thumbnail;
