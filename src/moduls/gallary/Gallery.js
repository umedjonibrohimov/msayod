import React, {useState} from "react";
import { Modal } from 'react-bootstrap';
import{imagesList} from '../../constants';
import {GalleryItem} from './GalleryItem';

function Gallery() {
    const [show, setShow] = useState(false);
    const [currentPixUrl, setCurrentPixUrl] = useState('');

    const handleClick = (url) => {
        setCurrentPixUrl(url);
        setShow(true);
    }

    const handleHideClick = () => {
        setShow(false)
    }

    return(
        <>
            <div class="container">
                <div class="row">
                    {imagesList.map((url) => (
                        <GalleryItem
                            url={url}
                            key={url}
                            onClick={handleClick}
                        />
                    ))}
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleHideClick}
                dialogClassName="modal-200w"
                aria-labelledby="example-custom-modal-styling-title"
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Lorem Ipsum
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={currentPixUrl}  
                         alt="" id='gallery' 
                         className="card-img-top img-fluid shadow-2-strong mask"
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Gallery;
