import { useState } from "react";
import { BsFillHeartFill, BsPlus, BsDownload } from "react-icons/bs";

const Images = ({ image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const openModal = (src) => {
        setIsModalOpen(true);
        setModalImageSrc(src);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setModalImageSrc("");
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img
                    src={image.urls.regular}
                    alt={image.alt_description}
                    onClick={() => openModal(image.urls.regular)}
                />
                {isHovered && (
                    <>
                        <div className="top-container">
                            <button className="like-btn">
                                <BsFillHeartFill />
                            </button>
                            <button className="add-collection">
                                <BsPlus />
                            </button>
                        </div>
                        <div className="bottom-container">
                            <div className="profile">
                                <img
                                    src={image.user.profile_image.small}
                                    alt="pic of user who posted the pic"
                                />
                                <p>{image.user.first_name}</p>
                            </div>
                            <button className="download-btn">
                                <BsDownload />
                            </button>
                        </div>
                    </>
                )}
            </li>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img
                        className="modal-content"
                        src={modalImageSrc}
                        alt="this is the modal pic"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};
export default Images;
