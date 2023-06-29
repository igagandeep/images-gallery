import { useState } from "react";

const Images = ({ image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState("");

    const openModal = (src) => {
        setIsModalOpen(true);
        setModalImageSrc(src);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setModalImageSrc("");
    };

    return (
        <>
            <li>
                <img
                    src={image.urls.regular}
                    alt={image.alt_description}
                    onClick={() => openModal(image.urls.regular)}
                />
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
