import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import AvailabilityPopover from './AvailabilityPopover';
import TimePopover from './TimePopover';

export const Textfield = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.input.name}>{props.label}</label>
            <input {...props.input} type='text' className={props.className} placeholder={props.placeholder}/>
            {props.meta.touched && props.meta.error &&
                <span className="error">{props.meta.error}</span>
            }
        </div>
    );
}

export const TextfieldWithPopover = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.input.name}>{props.label}</label>
            <OverlayTrigger trigger="click" placement="right" overlay={props.popover} >
                <InfoIcon />
            </OverlayTrigger>
            <input {...props.input} type='text' className={props.className} placeholder={props.placeholder}/>
            {props.meta.touched && props.meta.error &&
                <span className="error">{props.meta.error}</span>
            }
        </div>
    );
}

export const Dropdown = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.input.name}>{props.label}</label>
            <select {...props.input} className={props.className}>
                <option></option>
                {props.choices.map((choice, index) => {
                        return <option key={index} value={choice.value}>{choice.label}</option>
                    })
                }
            </select>
            {props.meta.touched && props.meta.error &&
                <span className="error">{props.meta.error}</span>
            }
        </div>
    );
}

export const SkillPicker = (props) => {
    return (
        <div className='form-group skill-picker-section'>
            <label htmlFor={props.name} className='skill-picker-label'>{props.label}</label>
            <select {...props} className={props.className} onChange={props.onChange}>
                <option value=''>All</option>
                {props.choices.map((choice, index) => {
                        return <option key={index} value={choice.value}>{choice.label}</option>
                    })
                }
            </select>
        </div>
    );
}