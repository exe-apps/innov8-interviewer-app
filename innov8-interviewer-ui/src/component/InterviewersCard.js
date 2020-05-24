import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import unkownPic from '../img/unknown.jpg';
import '../css/InterviewersCard.css';

const InterviewersCard = (props) => {
    const { 
        interviewerList, 
        showInterviewerInfoModal 
    } = props;

    return (
        <CardDeck>
            {
                interviewerList.map((interviewer, index) => {
                    if(interviewer.daysAvailable.includes(props.day)){
                        return (
                            <Card className='interviewer-card'>
                                <Card.Img className='interviewer-img' variant="top" src={unkownPic} />
                                <Card.Title className='interviewer-name'>{interviewer.name}</Card.Title>
                                <Button className='interviewer-info-btn' variant="secondary" onClick={() => props.showInterviewerInfoModal(interviewer)}>See info</Button>
                            </Card>
                        )
                    }
                })
            }
        </CardDeck> 
    );
}

export default InterviewersCard;