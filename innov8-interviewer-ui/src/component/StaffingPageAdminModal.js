import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Modal from 'react-bootstrap/Modal';
import InfoIcon from '@material-ui/icons/Info';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import AvailabilityPopover from './AvailabilityPopover';
import TimePopover from './TimePopover';
import { Textfield, TextfieldWithPopover, Dropdown } from './CustomInputs';
import '../css/StaffingPageAdminModal.css';
import { 
    AreaChoices, 
    SpecializationChoices, 
    BooleanChoices
} from '../redux/constant/ui-constants';
import { 
    closeStaffingInfoModal
} from '../redux/action/interviewer-action';

class StaffingPageAdminModal extends Component {

    render() {
        const { 
            areaValue, 
            closeStaffingInfoModal, 
            showStaffingInfoModal,
            handleSubmit,
            pristine,
            submitting
        } = this.props;

        return (
            <Modal show={showStaffingInfoModal}>
                <Modal.Header>
                        <Modal.Title>
                            Interviewer Modal
                        </Modal.Title>
                </Modal.Header>
    
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <Field name='interviewerName' 
                            className='form-control' 
                            label='Name'
                            placeholder='Enter name'
                            component={Textfield} />
                        
                        <Field name='email' 
                            className='form-control' 
                            label='Email'
                            placeholder='Enter email' 
                            component={Textfield} />
                        
                        <Field name='contactNumber' 
                            className='form-control' 
                            label='Contact Number'
                            placeholder='Enter contact number' 
                            component={Textfield} />

                        <Field name='area' 
                            className='form-control' 
                            label='Area'
                            choices={AreaChoices} 
                            component={Dropdown} />

                        {areaValue === 'Java' && 
                            <Field name='specialization' 
                                className='form-control' 
                                label='Specialization'
                                choices={SpecializationChoices} 
                                component={Dropdown} />
                        }

                        <Field name='cvReviewer' 
                            className='form-control' 
                            label='CV Reviewer'
                            choices={BooleanChoices} 
                            component={Dropdown} />

                        <Field name='bbsiReviewer' 
                            className='form-control' 
                            label='BBSI Reviewer'
                            choices={BooleanChoices} 
                            component={Dropdown} />

                        <Field name='availability' 
                            className='form-control' 
                            label='Availability'
                            placeholder='ex: Monday, Wednesday and Friday' 
                            popover={AvailabilityPopover}
                            component={TextfieldWithPopover} />
                        
                        <Field name='time' 
                            className='form-control' 
                            label='Time'
                            placeholder='ex: 5PM to 6PM' 
                            popover={TimePopover}
                            component={TextfieldWithPopover} />

                        <Field name='webex' 
                            className='form-control' 
                            label='Webex'
                            placeholder='Enter webex url'
                            component={Textfield} />
                        
                        <div className='button-panel'>
                            <button type="submit" 
                                className="btn btn-dark submit-button" 
                                disabled={pristine || submitting}>
                                Submit
                            </button>

                            <button type="button" 
                                className="btn btn-dark cancel-button" 
                                onClick={() => closeStaffingInfoModal()}>
                                    Cancel
                            </button>
                        </div>
                        
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

StaffingPageAdminModal = reduxForm({
    form: 'staffingPageAdminModal',    // unique form name
    enableReinitialize : true
})(StaffingPageAdminModal);

const selector = formValueSelector('staffingPageAdminModal');
const mapStateToProps = state => {
    const areaValue = selector(state, 'area');
    return { 
        areaValue: areaValue,
        showStaffingInfoModal: state.interviewerData.showStaffingInfoModal
    };
};


const mapDispatchToProps = dispatch => {
    return {
        closeStaffingInfoModal: () => dispatch(closeStaffingInfoModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffingPageAdminModal);