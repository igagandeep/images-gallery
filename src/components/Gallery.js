import ImageItem from "./ImageItem";

const Gallery = ({ images }) => {
    return (
        <main>
            <div className="wrapper">
                <ul className="gallery">
                    {images ? (
                        images.map((image) => (
                            <ImageItem key={image.id} image={image} />
                        ))
                    ) : (
                        <h2>No images found.</h2>
                    )}
                </ul>
            </div>
        </main>
    );
};
export default Gallery;
