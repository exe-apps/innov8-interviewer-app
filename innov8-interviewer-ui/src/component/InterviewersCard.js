import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import BadgeGenerator from './BadgeGenerator';
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
                            <Col md={4}>
                                <Card border='dark' bg='dark' text='white' style={{ margin: 'auto auto 30px auto'}}>
                                    <Card.Img className='interviewer-img' variant="top" src={interviewer.imageUrl} />
                                    <Card.Title className='interviewer-name'>{interviewer.name} <BadgeGenerator interviewer={interviewer}></BadgeGenerator></Card.Title>
                                    <Button className='interviewer-info-btn' variant="outline-dark" onClick={() => props.showInterviewerInfoModal(interviewer)}>See info</Button>
                                </Card>
                            </Col>
                        )
                    }
                })
            }
        </CardDeck> 
    );
}

export default InterviewersCard;