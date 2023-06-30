import Images from "./Images";

const Gallery = ({ images }) => {
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
