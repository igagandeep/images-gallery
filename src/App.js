import { useState, useEffect } from "react";
import axios from "axios";
import "./Normalize.css";
import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import NoDataFound from "./components/NoDataFound";

const App = () => {
    const [images, setImages] = useState([]);
    const apiEndpoint = "https://api.unsplash.com/photos";
    const searchEndpoint = "https://api.unsplash.com/search/photos";
    const secretKey = "1svZZYm3FwvxM0KZcxajbDiMMEVomiz1mZ8lls1SE9A";

    useEffect(() => {
        getImages();
    }, []);

    const getImages = async () => {
        try {
            const response = await axios.get(apiEndpoint, {
                headers: {
                    Authorization: `Client-ID ${secretKey}`,
                },
                params: {
                    per_page: 28,
                },
            });
            setImages(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const searchImages = async (query) => {
        try {
            const response = await axios.get(searchEndpoint, {
                headers: {
                    Authorization: `Client-ID ${secretKey}`,
                },
                params: {
                    query: query,
                    per_page: 28,
                },
            });
            setImages(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="app">
            <Header searchImages={searchImages} />
            {images.length === 0 ? (
                <NoDataFound />
            ) : (
                <Gallery images={images} />
            )}
            <Footer />
        </div>
    );
};

export default App;
