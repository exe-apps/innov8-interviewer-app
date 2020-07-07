import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmationModal = (props) => {
    const {
        showConfirmationModal,
        closeConfirmationModal,
        deleteInterviewer,
        interviewerIdToDelete
    } = props;
    
    return (
        <Modal show={showConfirmationModal}>
            <Modal.Header>
                <Modal.Title>Confirmation Action</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p className='confirmation-text'>Are you sure you want to proceed with this action?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={() => deleteInterviewer(interviewerIdToDelete)}>Proceed</Button>
                <Button variant="dark" onClick={() => closeConfirmationModal()}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;