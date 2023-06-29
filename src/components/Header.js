/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../assets/logo.png";
const Header = () => {
    return (
        <header>
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
        </header>
    );
};
export default Header;
