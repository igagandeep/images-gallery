/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../assets/logo.png";
import backgroundImage from "../assets/banner.jpg";
import Searchbar from "./Searchbar";

const Header = ({ searchImages }) => {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    };
    return (
        <header>
            <nav>
                <div className="wrapper">
                    <img
                        src={Logo}
                        className="logo"
                        alt="this is logo of the website"
                    />
                    <ul className="nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Join</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="banner" style={containerStyle}>
                <div className="wrapper">
                    <h1>Images Collection</h1>
                    <Searchbar searchImages={searchImages} />
                </div>
            </section>
        </header>
    );
};
export default Header;
