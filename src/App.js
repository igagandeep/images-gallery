import { useState, useEffect } from "react";
import axios from "axios";
import "./Normalize.css";
import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import NoDataFound from "./components/NoDataFound";
import LoadingAnimation from "./components/LoadingAnimation";

const apiEndpoint = "https://api.unsplash.com/photos";
const searchEndpoint = "https://api.unsplash.com/search/photos";
const secretKey = "1svZZYm3FwvxM0KZcxajbDiMMEVomiz1mZ8lls1SE9A";

const App = () => {
    const [images, setImages] = useState([]);
    const [loadingAnimation, setLoadingAnimation] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    useEffect(() => {
        if (query) {
            searchImages(query);
        } else {
            getImages();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const getImages = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(apiEndpoint, {
                headers: {
                    Authorization: `Client-ID ${secretKey}`,
                },
                params: {
                    page: page,
                },
            });
            setImages((prevImages) => [...prevImages, ...response.data]);
            setTimeout(() => {
                setLoadingAnimation(false);
            }, 1500);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const searchImages = async (userInput) => {
        setIsLoading(true);

        // it checks if coming userinput is equal to the previous one if not then update page number to
        if (query !== userInput) {
            try {
                const response = await axios.get(searchEndpoint, {
                    headers: {
                        Authorization: `Client-ID ${secretKey}`,
                    },
                    params: {
                        query: userInput,
                        page: 1,
                    },
                });

                setImages(response.data.results);
                setQuery(userInput);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        } else {
            try {
                const response = await axios.get(searchEndpoint, {
                    headers: {
                        Authorization: `Client-ID ${secretKey}`,
                    },
                    params: {
                        query: userInput,
                        per_page: 15,
                        page: page,
                    },
                });
                if (page === 1) {
                    setImages(response.data.results);
                    setQuery(userInput);
                } else {
                    setImages((prevImages) => [
                        ...prevImages,
                        ...response.data.results,
                    ]);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="app">
            {loadingAnimation ? (
                <LoadingAnimation />
            ) : (
                <>
                    <Header searchImages={searchImages} />
                    {images.length === 0 ? (
                        <NoDataFound />
                    ) : (
                        <Gallery
                            images={images}
                            isLoading={isLoading}
                            handleLoadMore={handleLoadMore}
                        />
                    )}
                    <Footer />
                </>
            )}
        </div>
    );
};
export default App;
