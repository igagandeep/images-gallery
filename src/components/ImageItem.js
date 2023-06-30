import React, { useState } from "react";
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
            <li
                className="image-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={image.urls.regular}
                    alt={image.alt_description}
                    loading="lazy"
                    onClick={() => openModal(image.urls.regular)}
                />
                {isHovered && (
                    <>
                        <div className="image-item__actions">
                            <button className="like-btn">
                                <BsFillHeartFill />
                            </button>
                            <button className="add-collection">
                                <BsPlus />
                            </button>
                        </div>
                        <div className="image-item__info">
                            <div className="profile">
                                <img
                                    loading="lazy"
                                    src={image.user.profile_image.small}
                                    alt="Profile pic of the user who posted the pic"
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
                        loading="lazy"
                        className="modal-content"
                        src={modalImageSrc}
                        alt="Modal pic"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};

export default Images;
