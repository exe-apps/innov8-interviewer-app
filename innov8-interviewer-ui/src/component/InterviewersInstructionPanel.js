import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import BadgeGenerator from './BadgeGenerator';
import '../css/InterviewersInstructionPanel.css';

const InterviewersInstructionPanel = (props) => {

    return (
        <Jumbotron className='instruction-panel' fluid>
            <Container className='instruction-bubble' fluid>
                  <h1>Interviewer Availability</h1>
                  <hr></hr>
                  <br></br>
                  <p className='instruction-text'>
                      View interviewer information and availability below. Interviewers are only available on certain days, and have specific time that they can accomodate interview requests. Do note that CV's that are not updated will be automatically marked as failed during screening. Please click "see info" button, under the interviewer name, to display relevant information.
                  </p>
                  <p className='instruction-text'>See following indicators:</p>
                  <p className='instruction-text'><BadgeGenerator specialization='Fullstack' /> Fullstack Interviewer</p>
                  <p className='instruction-text'><BadgeGenerator specialization='UI' /> Front-end Interviewer </p>
                  <p className='instruction-text'><BadgeGenerator specialization='Webservices' /> Webservices Interviewer </p>
            </Container>
        </Jumbotron>
    );
}

export default InterviewersInstructionPanel;