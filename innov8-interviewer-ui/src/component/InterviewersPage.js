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
import { SkillChoices, Days } from '../redux/constant/ui-constants';
import { SkillPicker } from './CustomInputs';
import { 
    getInterviewerList,
    getInterviewerBySkill,
    showInterviewerInfoModal,
    closeInterviewerInfoModal
} from '../redux/action/interviewer-action';

class InterviewersPage extends Component {

    componentDidMount() {
        this.props.getInterviewerList();
    }

    onChangeSkill = event => {
        const { getInterviewerList, getInterviewerBySkill } = this.props;
        const skill = event.target.value;

        if(skill) {
            getInterviewerBySkill(skill);
        } else {
            getInterviewerList();
        }
    }

    render() {
        return(
            <div className='interviewer-page'>
                <Image fluid src={interviewerImage} className='landing-img'></Image>
                <InterviewersInstructionPanel></InterviewersInstructionPanel>
                <Container fluid className='content-body'>
                <SkillPicker 
                    name='skill-picker'
                    label='Skill'
                    className='form-control' 
                    choices={SkillChoices}
                    onChange={this.onChangeSkill}/>
                    {
                        Days.map((day, index) => {
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
        showInfoModal: state.interviewerData.showInterviewerInfoModal
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getInterviewerList: () => dispatch(getInterviewerList()),
        getInterviewerBySkill: (skill) => dispatch(getInterviewerBySkill(skill)),
        showInterviewerInfoModal: (interviewerData) => dispatch(showInterviewerInfoModal(interviewerData)),
        closeInterviewerInfoModal: () => dispatch(closeInterviewerInfoModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewersPage);