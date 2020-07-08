import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import UnknownPic from '../img/unknown.jpg';
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
                <Row className='figure-row'>
                    <Figure className='figure-box'>
                        <Figure.Image className='figure-pic' src={interviewerInfo.imageUrl ? interviewerInfo.imageUrl : UnknownPic} width={120} height={120}/>
                        <Figure.Caption className='figure-name'>
                            <h1>{interviewerInfo.name}</h1>
                        </Figure.Caption>
                    </Figure>
                </Row>
                <Row className='info-modal-row'>
                    <Col><label>Email: <b>{interviewerInfo.email}</b></label></Col>
                </Row>
                <Row className='info-modal-row'>
                    <Col><label>Contact Number: <b>{interviewerInfo.contactNumber}</b></label></Col>
                </Row>
                <br/>
                <Row className='info-modal-row'>
                    <Col><label>Area: <b>{interviewerInfo.skill}</b></label></Col>
                    <Col><label>CV Reviewer: <b>{interviewerInfo.cvReviewer ? 'Yes' : 'No'}</b></label></Col>
                </Row>
                <Row className='info-modal-row'>
                    <Col><label>Specialization: <b>{interviewerInfo.specialization ? interviewerInfo.specialization : 'N/A'}</b></label></Col>
                    <Col><label>BBSI Interviewer: <b>{interviewerInfo.bbsiInterviewer ? 'Yes' : 'No'}</b></label></Col>
                </Row>
                <br/>
                <Row className='info-modal-row'>
                    <Col><label>Availability: <b>{interviewerInfo.daysAvailable}</b></label></Col>
                </Row>
                <Row className='info-modal-row'>
                    <Col><label>Time: <b>{interviewerInfo.timeAvailable}</b></label></Col>
                </Row>
                <Row className='info-modal-row'>
                    <Col>
                        <label>Webex URL: <a href={interviewerInfo.webexUrl} target="_blank">{interviewerInfo.webexUrl}</a></label>
                    </Col>
                </Row>
                <br/>
                <Row className='info-modal-close-button-section'>
                    <Col>
                        <Button className='info-modal-close-button' variant="outline-dark" onClick={closeInterviewerInfoModal}>Close</Button>   
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default InterviewersInfoModal;