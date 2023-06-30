import { useState, useEffect } from "react";
import "./Normalize.css";
import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import axios from "axios";
import NoDataFound from "./components/NoDataFound";

function App() {
    const [images, setImages] = useState([]);
    const apiEndpoint = `https://api.unsplash.com/photos`;
    const searchEndpoint = `https://api.unsplash.com/search/photos`;
    const myApiKey = `1svZZYm3FwvxM0KZcxajbDiMMEVomiz1mZ8lls1SE9A`;

    useEffect(() => {
        getImages();

        // eslint-disable-next-line react-hooks/exhaustive-deps, no-use-before-define
    }, []);

    const getImages = async () => {
        const optionalParams = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Client-ID ${myApiKey}`,
            },
            params: {
                per_page: 30,
            },
        };
        try {
            const res = await axios.get(apiEndpoint, optionalParams);
            setImages(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const searchImages = async (query) => {
        const optionalParams = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Client-ID ${myApiKey}`,
            },
            params: {
                query: query,
                per_page: 30,
            },
        };
        try {
            const res = await axios.get(searchEndpoint, optionalParams);
            setImages(res.data.results);
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
}

export default App;
