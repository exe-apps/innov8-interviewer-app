import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import BadgeGenerator from './BadgeGenerator';
import UnknownPic from '../img/unknown.jpg';
import '../css/InterviewersCard.css';

const InterviewersCard = (props) => {
    const { 
        interviewerList, 
    } = props;

    return (
        <CardDeck>
            {
                interviewerList && interviewerList.map((interviewer, index) => {
                    if(interviewer.daysAvailable && interviewer.daysAvailable.includes(props.day)){
                        return (
                            <Col md={4} key={index}>
                                <Card border='light' bg='dark' text='white' style={{ margin: 'auto auto 30px auto'}}>
                                    <Card.Img 
                                        className='interviewer-img' 
                                        variant="top" 
                                        src={interviewer.imageUrl ? interviewer.imageUrl : UnknownPic} />
                                    <Card.Title className='interviewer-name'>{interviewer.name} <BadgeGenerator specialization={interviewer.specialization}></BadgeGenerator></Card.Title>
                                    <Button className='interviewer-info-btn' variant="outline-dark" active onClick={() => props.showInterviewerInfoModal(interviewer)}>See info</Button>
                                </Card>
                            </Col>
                        )
                    }
                    return
                })
            }
        </CardDeck> 
    );
}

export default InterviewersCard;