import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import ThumbnailLarge from '../ThumbnailLarge';
import Bookmarked from '../Bookmarked';
import Thumbnail from '../Thumbnail';
import TVShows from '../TVShows';
import Movies from '../Movies';
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

const Home = ({ isLoading, moviesAndShows }) => {
    const [content, setContent] = useState('home');
    const [searchTerm, setSearchTerm] = useState('');

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
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </form>
                        </div>
                    </div>
                    {/* main content */}
                    {content === 'movies' ? (
                        <Movies
                            moviesAndShows={moviesAndShows}
                            searchTerm={searchTerm}
                        />
                    ) : content === 'tv' ? (
                        <TVShows
                            moviesAndShows={moviesAndShows}
                            searchTerm={searchTerm}
                        />
                    ) : content === 'bookmarked' ? (
                        <Bookmarked
                            moviesAndShows={moviesAndShows}
                            searchTerm={searchTerm}
                        />
                    ) : (
                        <div id="home-container">
                            <div>
                                <h1 id="trending-title">Trending</h1>
                                <div id="scrolling-container">
                                    {moviesAndShows.map((trending, idx) => (
                                        <ThumbnailLarge
                                            trending={trending}
                                            key={idx}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h1 id="recommended-title">
                                    Recommended for you
                                </h1>
                                <div id="main-content">
                                    {moviesAndShows
                                        .filter((result) => {
                                            return searchTerm.toLowerCase() ===
                                                ''
                                                ? result
                                                : result.title
                                                      .toLowerCase()
                                                      .includes(searchTerm);
                                        })
                                        .map((movieOrTVShow, idx) => (
                                            <div
                                                className="grid-item"
                                                key={idx}
                                            >
                                                <Thumbnail
                                                    movieOrTVShow={
                                                        movieOrTVShow
                                                    }
                                                />
                                            </div>
                                        ))}
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
