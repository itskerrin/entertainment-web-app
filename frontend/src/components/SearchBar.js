import './styles/components/_searchbar.scss';
import search from '../assets/icon-search.svg';

const SearchBar = () => {
    return (
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
    );
};

export default SearchBar;
