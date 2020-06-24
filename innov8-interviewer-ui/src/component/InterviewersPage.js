import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InterviewersCard from './InterviewersCard';
import InterviewersInfoModal from './InterviewersInfoModal';
import InterviewersInstructionPanel from './InterviewersInstructionPanel';
import interviewerImage from '../img/interview.jpg';
import Image from 'react-bootstrap/Image';
import '../css/InterviewersPage.css';
import { 
    getInterviewerList,
    showInterviewerInfoModal,
    closeInterviewerInfoModal
} from '../redux/action/interviewer-action';
import userManager from '../redux/config/userManager';

class InterviewersPage extends Component {

    componentDidMount() {
        console.log('INT PAGE');
        // console.log(this.props.oidcData);

        userManager.getUser().then((user) => {
            console.log(user);
            // avoid page refresh errors
            if (!user|| user.expired) {
                return userManager.signinRedirect();
            }
        });

        //this.props.getInterviewerList();
    }

    render() {
        const days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
        ];

        return(
            <div className='interviewer-page'>
                <Image fluid src={interviewerImage} className='landing-img'></Image>
                <InterviewersInstructionPanel></InterviewersInstructionPanel>
                <Container fluid className='content-body'>
                    {
                        days.map((day, index) => {
                            return (
                                    <Fragment key={index}>
                                        <Row className='day-info'>
                                            <h1>{day}</h1>
                                        </Row>
                                        <Row className='interviewer-list-info' md={12}>
                                            <InterviewersCard {...this.props} day={day}/>
                                        </Row>
                                        <Row>
                                            <InterviewersInfoModal {...this.props}/>
                                        </Row>
                                    </Fragment>
                                )
                        })
                    }
                </Container>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return { 
        interviewerList: state.interviewerData.interviewerList,
        interviewerInfo: state.interviewerData.interviewerInfo,
        showInfoModal: state.interviewerData.showInterviewerInfoModal,
        // oidc: state.oidcData
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getInterviewerList: () => dispatch(getInterviewerList()),
        showInterviewerInfoModal: (interviewerData) => dispatch(showInterviewerInfoModal(interviewerData)),
        closeInterviewerInfoModal: () => dispatch(closeInterviewerInfoModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewersPage);