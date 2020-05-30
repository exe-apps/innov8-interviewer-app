import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InterviewersCard from './InterviewersCard';
import InterviewersInfoModal from './InterviewersInfoModal';
import '../css/InterviewersPage.css';
import { 
    getInterviewerList,
    showInterviewerInfoModal,
    closeInterviewerInfoModal
} from '../redux/action/interviewer-action';

class InterviewersPage extends Component {

    componentDidMount() {
        this.props.getInterviewerList();
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
            <Container fluid>
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
        );
    }
}

const mapStateToProps = state => {
    return { 
        interviewerList: state.interviewerData.interviewerList,
        interviewerInfo: state.interviewerData.interviewerInfo,
        showInfoModal: state.interviewerData.showInterviewerInfoModal
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