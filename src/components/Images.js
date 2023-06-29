const Images = ({ image }) => {
    return (
        <>
            <li>
                <img src={image.urls.regular} alt={image.alt_description} />
            </li>
        </>
    );
};
export default Images;
