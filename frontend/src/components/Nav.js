import './styles/components/_nav.scss';
import logo from '../assets/logo.svg';
import home from '../assets/icon-nav-home.svg';
import movies from '../assets/icon-nav-movies.svg';
import tv from '../assets/icon-nav-tv-series.svg';
import bookmarks from '../assets/icon-nav-bookmark.svg';
import avatar from '../assets/image-avatar.png';

const Nav = () => {
    return (
        <div id="nav-bar">
            <div>
                <img src={logo} id="logo" alt="logo" />
            </div>
            <div id="nav-items">
                <img src={home} alt="home" />
                <img src={movies} alt="movies" />
                <img src={tv} alt="tv" />
                <img src={bookmarks} alt="bookmarks" />
            </div>
            <div id="account">
                <img src={avatar} id="avatar" alt="avatar" />
            </div>
        </div>
    );
};

export default Nav;
