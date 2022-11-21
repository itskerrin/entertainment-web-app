import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Movies from '../Movies';
import Bookmarked from '../Bookmarked';
import TVShows from '../TVShows';
import bookmarks from '../../assets/icon-nav-bookmark.svg';
import movies from '../../assets/icon-nav-movies.svg';
import tv from '../../assets/icon-nav-tv-series.svg';
import avatar from '../../assets/image-avatar.png';
import home from '../../assets/icon-nav-home.svg';
import search from '../../assets/icon-search.svg';
import logo from '../../assets/logo.svg';
import '../styles/components/_searchbar.scss';
import '../styles/components/_nav.scss';
import '../styles/utils/_layout.scss';
import Thumbnail from '../Thumbnail';
import ThumbnailLarge from '../ThumbnailLarge';

const Home = ({ isLoading, moviesAndShows }) => {
    const [content, setContent] = useState('home');

    useEffect(() => {
        console.log(moviesAndShows);
    });

    return (
        <div>
            {isLoading ? (
                <div>
                    <ThreeDots
                        height="700"
                        width="100"
                        radius="9"
                        color="#5a698f"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{
                            width: '100vw',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        wrapperClassName="loader"
                        id="loader"
                        visible={isLoading}
                    />
                </div>
            ) : (
                <div>
                    <div id="nav-bar">
                        <div>
                            <img
                                src={logo}
                                id="logo"
                                alt="logo"
                                onClick={() => setContent('home')}
                            />
                        </div>
                        <div id="nav-items">
                            <img
                                src={home}
                                alt="home"
                                onClick={() => setContent('home')}
                            />
                            <img
                                src={movies}
                                alt="movies"
                                onClick={() => setContent('movies')}
                            />
                            <img
                                src={tv}
                                alt="tv"
                                onClick={() => setContent('tv')}
                            />
                            <img
                                src={bookmarks}
                                alt="bookmarks"
                                onClick={() => setContent('bookmarked')}
                            />
                        </div>
                        <div id="account">
                            <img src={avatar} id="avatar" alt="avatar" />
                        </div>
                    </div>

                    <div id="search-container">
                        <div id="search-icon">
                            <img src={search} alt="search" />
                        </div>
                        <div id="search-form">
                            <form>
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search for movies or TV series"
                                />
                            </form>
                        </div>
                    </div>
                    {/* content */}
                    {content === 'movies' ? (
                        <Movies />
                    ) : content === 'tv' ? (
                        <TVShows />
                    ) : content === 'bookmarked' ? (
                        <Bookmarked />
                    ) : (
                        <div id="home-container">
                            <div>
                                <h1 id="trending-title">Trending</h1>
                                <div id="scrolling-container">
                                    {/* {moviesAndShows.map(
                                        (trending, idx) =>
                                            trending.title ===
                                                'During the Hunt' && ( */}
                                    <ThumbnailLarge
                                    // trending={trending}
                                    // key={idx}
                                    />
                                    {/* ) */}
                                    {/* )} */}
                                </div>
                            </div>
                            <div>
                                <h1 id="recommended-title">
                                    Recommended for you
                                </h1>
                                <div id="main-content">
                                    <div className="grid-item">
                                        <Thumbnail />
                                    </div>
                                    <div className="grid-item">
                                        <Thumbnail />
                                    </div>
                                    <div className="grid-item">
                                        <Thumbnail />
                                    </div>
                                    <div className="grid-item">
                                        <Thumbnail />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
