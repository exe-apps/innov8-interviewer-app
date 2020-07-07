import React, { Component } from 'react';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import '../css/StaffingPage.css';
import StaffingPageAdminModal from './StaffingPageAdminModal'
import { 
    getInterviewerList,
    addInterviewer,
    updateInterviewer,
    showUpdateStaffingInfoModal,
    showStaffingInfoModal
} from '../redux/action/interviewer-action';

class StaffingPage extends Component {

    componentDidMount() {
        this.props.getInterviewerList();
    }

    handleSubmit = (data, props, form) => {
        const { 
            addInterviewer, 
            updateInterviewer, 
            eventFlow 
        } = this.props;
        
        if(eventFlow === 'ADD') {
            addInterviewer(data);
        } else {
            updateInterviewer(data.interviewerId, data);
        }

        // reset modal inputs on submit
        form.reset();
    }

    render() {
        const { 
            interviewerList, 
            showUpdateStaffingInfoModal,
            showStaffingInfoModal
        } = this.props;
        
        return(
            <div className='staffing-page'>
                <Container fluid className='content-body'>
                    <Row className='staffing-admin-panel'>
                        <Col md={{ offset: 11 }}>
                            <AddCircleIcon style={{ fontSize: 70 }} onClick={() => showStaffingInfoModal('ADD')} /> 
                        </Col>
                    </Row>
                    <StaffingPageAdminModal onSubmit={this.handleSubmit} />  
                    { 
                        interviewerList.map((interviewerInfo, index) => {
                            return (
                                <Row className='staff-row' key={index}>
                                    <Accordion className='staff-acc' defaultActiveKey='0'>
                                        <Card className='acc-card'>
                                            <Accordion.Toggle className='acc-toggle' as={Card.Header} variant="link" eventKey={index}>
                                                <Row className='acc-header' md={12}>
                                                    <Col md={2}>
                                                        <Image className='acc-img' src={interviewerInfo.imageUrl} roundedCircle />
                                                    </Col>
                                                    <Col md={10} className='acc-name'>
                                                        <h1>{interviewerInfo.name}</h1>
                                                    </Col> 
                                                </Row>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse className='acc-collapse' eventKey={index}>
                                                <Card.Body>
                                                    <Row>
                                                        <Col><label>Email: <b>{interviewerInfo.email}</b></label></Col>
                                                        <Col><label>Contact Number: <b>{interviewerInfo.contactNumber}</b></label></Col>
                                                    </Row>
                                                    <br/>
                                                    <Row>
                                                        <Col><label>Area: <b>{interviewerInfo.skill}</b></label></Col>
                                                        <Col><label>CV Reviewer: <b>{interviewerInfo.cvReviewer ? 'Yes' : 'No'}</b></label></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>Specialization: 
                                                                <b>
                                                                    {(interviewerInfo.skill && interviewerInfo.skill === 'Java') ?
                                                                    interviewerInfo.specialization : 'N/A'}
                                                                </b>
                                                            </label>
                                                        </Col>
                                                        <Col><label>BBSI Interviewer: <b>{interviewerInfo.bbsiInterviewer ? 'Yes' : 'No'}</b></label></Col>
                                                    </Row>
                                                    <br/>
                                                    <Row>
                                                        <Col><label>Availability: <b>{interviewerInfo.daysAvailable}</b></label></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><label>Time: <b>{interviewerInfo.timeAvailable}</b></label></Col>
                                                    </Row>
                                                    <br/>
                                                    <Row>
                                                        <Col>
                                                            <label>Webex URL: <a href={interviewerInfo.webexUrl} target="_blank">{interviewerInfo.webexUrl}</a></label>
                                                        </Col>
                                                    </Row>
                                                    <br/>
                                                    <Row className='icon-row'>
                                                        <EditIcon 
                                                            className='edit-icon' 
                                                            style={{ fontSize: 50 }}
                                                            onClick={() => showUpdateStaffingInfoModal(interviewerInfo)} />
                                                        <DeleteForeverIcon 
                                                            className='delete-icon' 
                                                            style={{ fontSize: 50 }} />
                                                    </Row>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Row>
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
        eventFlow: state.interviewerData.eventFlow
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getInterviewerList: () => dispatch(getInterviewerList()),
        addInterviewer: (interviewer) => dispatch(addInterviewer(interviewer)),
        updateInterviewer: (id, interviewer) => dispatch(updateInterviewer(id, interviewer)),
        showUpdateStaffingInfoModal: (interviewer) => dispatch(showUpdateStaffingInfoModal(interviewer)),
        showStaffingInfoModal: (flow) => dispatch(showStaffingInfoModal(flow))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffingPage);