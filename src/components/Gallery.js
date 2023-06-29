/* eslint-disable no-use-before-define */
import Images from "./Images";
import { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const apiEndpoint = `https://api.unsplash.com/photos`;
    const myApiKey = `1svZZYm3FwvxM0KZcxajbDiMMEVomiz1mZ8lls1SE9A`;

    useEffect(() => {
        getImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getImages = async () => {
        const optionalParams = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Client-ID ${myApiKey}`,
            },
            params: {
                per_page: 30,
                // Add any other optional parameters here
            },
        };
        try {
            const res = await axios.get(apiEndpoint, optionalParams);
            console.log(res.data);
            setImages(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main>
            <div className="wrapper">
                <ul className="gallery">
                    {images &&
                        images.map((image) => {
                            return <Images key={image.id} image={image} />;
                        })}
                </ul>
            </div>
        </main>
    );
};
export default Gallery;
