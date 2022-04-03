import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'

const Popup = props => {

    const [show, setShow] = useState(false);
    const [hata] = useState(props);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow();
    },[]);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>İnfo</Modal.Title>
                </Modal.Header>
                <Modal.Body>{hata}</Modal.Body>
            </Modal>
        </>
    );
};

export default Popup;
