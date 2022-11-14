import thumb from '../assets/large.jpg';

const ThumbnailLarge = ({ trending }) => {
    return (
        <>
            <div id="thumbnail-container">
                <img
                    // src={trending.thumbnail.regular.large}
                    src={thumb}
                    alt="thumbnail"
                    id="thumbnail-large"
                />
                {/* <div id="lrg-info-wrapper">
                    <div id="lrg-info">
                        <p>{trending.year}</p>
                        <p>{trending.category}</p>
                        <p>{trending.rating}</p>
                    </div>
                    <div id="lrg-title">{trending.title}</div>
                </div> */}
                <div id="lrg-info-wrapper">
                    <div id="lrg-info">
                        <p>2002</p>
                        <p>Movies</p>
                        <p>PG 13</p>
                    </div>
                    <div id="lrg-title">During the hunt</div>
                </div>
            </div>
        </>
    );
};

export default ThumbnailLarge;
