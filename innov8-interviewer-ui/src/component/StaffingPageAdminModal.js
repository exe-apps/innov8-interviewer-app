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
import { Required, EmailValidator } from '../redux/validator/form-validator';
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
            submitting,
            reset
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
                        <Field name='name' 
                            className='form-control' 
                            label='Name'
                            placeholder='Enter name'
                            component={Textfield}
                            validate={Required} />
                        
                        <Field name='email' 
                            className='form-control' 
                            label='Email'
                            placeholder='Enter email' 
                            component={Textfield}
                            validate={[Required, EmailValidator]} />
                        
                        <Field name='contactNumber' 
                            className='form-control' 
                            label='Contact Number'
                            placeholder='Enter contact number' 
                            component={Textfield} 
                            validate={Required} />

                        <Field name='skill' 
                            className='form-control' 
                            label='Skill'
                            choices={AreaChoices} 
                            component={Dropdown} 
                            validate={Required} />

                        {areaValue === 'Java' && 
                            <Field name='specialization' 
                                className='form-control' 
                                label='Specialization'
                                choices={SpecializationChoices} 
                                component={Dropdown} 
                                validate={Required} />
                        }

                        <Field name='cvReviewer' 
                            className='form-control' 
                            label='CV Reviewer'
                            choices={BooleanChoices} 
                            component={Dropdown}
                            validate={Required} />

                        <Field name='bbsiReviewer' 
                            className='form-control' 
                            label='BBSI Reviewer'
                            choices={BooleanChoices} 
                            component={Dropdown}
                            validate={Required} />

                        <Field name='daysAvailable' 
                            className='form-control' 
                            label='Availability'
                            placeholder='ex: Monday, Wednesday and Friday' 
                            popover={AvailabilityPopover}
                            component={TextfieldWithPopover}
                            validate={Required} />
                        
                        <Field name='timeAvailable' 
                            className='form-control' 
                            label='Time'
                            placeholder='ex: 5PM to 6PM' 
                            popover={TimePopover}
                            component={TextfieldWithPopover}
                            validate={Required} />

                        <Field name='webexUrl' 
                            className='form-control' 
                            label='Webex'
                            placeholder='Enter webex url'
                            component={Textfield}
                            validate={Required} />
                        
                        <div className='button-panel'>
                            <button type="submit" 
                                className="btn btn-dark submit-button" 
                                disabled={pristine || submitting}>
                                Submit
                            </button>

                            <button type="button" 
                                className="btn btn-dark cancel-button" 
                                onClick={() => {closeStaffingInfoModal(); reset();}}>
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