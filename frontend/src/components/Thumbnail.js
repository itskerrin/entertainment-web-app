import medium from '../assets/medium.jpg';
import './styles/components/_thumbnail.scss';

const Thumbnail = () => {
    return (
        <div
            id="thumbnail-regular"
            style={{
                backgroundImage: `url(${medium})`,
            }}
        ></div>
    );
};

export default Thumbnail;
