import ImageItem from "./ImageItem";

const Gallery = ({ images, isLoading, handleLoadMore }) => {
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
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="load-btn-container">
                        <button onClick={handleLoadMore} disabled={isLoading}>
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};
export default Gallery;
