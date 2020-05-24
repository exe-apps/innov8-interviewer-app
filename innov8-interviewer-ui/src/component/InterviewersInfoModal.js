import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure'
import unkownPic from '../img/unknown.jpg';
import '../css/InterviewersInfoModal.css';

const InterviewersInfoModal = (props) => {
    const {
        interviewerInfo, 
        showInfoModal, 
        closeInterviewerInfoModal
    } = props;
    
    return (
        <Modal show={showInfoModal}>
            <Modal.Body>
                <Row>
                    <Figure>
                        <Figure.Image className='figure-pic' src={unkownPic} />
                        <Figure.Caption className='figure-name'>
                            <h1>{interviewerInfo.name}</h1>
                        </Figure.Caption>
                    </Figure>
                </Row>
                <Row className='info-modal-row'>
                    <Col><label>Email: {interviewerInfo.email}</label></Col>
                    <Col><label>Contact #: {interviewerInfo.contactNumber}</label></Col>
                </Row>
                <Row className='info-modal-row'>
                    <Col><label>Area: {interviewerInfo.skill}</label></Col>
                    <Col><label>CV Reviewer: {interviewerInfo.cvReviewer ? 'Yes' : 'No'}</label></Col>
                </Row>
                <Row className='info-modal-row'>
                    <Col><label>Specialization: {interviewerInfo.specialization}</label></Col>
                    <Col><label>BBSI Interviewer: {interviewerInfo.bbsiInterviewer ? 'Yes' : 'No'}</label></Col>
                </Row>
                <br/>
                <Row className='info-modal-row'>
                    <Col><label>Availability: {interviewerInfo.daysAvailable}</label></Col>
                </Row>
                <Row className='info-modal-row'>
                    <Col><label>Time: {interviewerInfo.timeAvailable}</label></Col>
                </Row>
                <Row className='info-modal-row'>
                    <Col>
                        <label>Webex URL: {interviewerInfo.webexUrl}</label>
                    </Col>
                </Row>
                <br/>
                <Row className='info-modal-close-button-section'>
                    <Col>
                        <Button className='info-modal-close-button' variant="outline-secondary" onClick={closeInterviewerInfoModal}>Close</Button>   
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default InterviewersInfoModal;