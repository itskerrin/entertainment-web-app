import Nav from '../Nav';
import SearchBar from '../SearchBar';
import Trending from '../Trending';
import { ThreeDots } from 'react-loader-spinner';

const Home = ({ isLoading }) => {
    return (
        <div>
            {isLoading ? (
                <div>
                    <Nav />
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
                    <Nav />
                    <SearchBar />
                    <div>
                        <Trending />
                    </div>
                    {/* <div>
                    
                     </div> */}
                </div>
            )}
        </div>
    );
};

export default Home;
