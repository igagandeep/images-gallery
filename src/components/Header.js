import React from "react";
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

    const navLinks = [
        { label: "Home", href: "/" },
        {
            label: "About",
            href: "http://gagandeep-portfolio.com/",
            target: "_blank",
            rel: "noreferrer",
        },
        { label: "Contact", href: "#" },
        { label: "Join", href: "#" },
    ];

    return (
        <header>
            <nav>
                <div className="wrapper">
                    <img src={Logo} className="logo" alt="Website Logo" />
                    <ul className="nav">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    target={link.target}
                                    rel={link.rel}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
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
