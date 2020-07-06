import React from 'react';
import Popover from 'react-bootstrap/Popover';

const TimePopover = (props) => {
    return (
        <Popover id="popover-basic" {...props}>
            <Popover.Title as="h3">Time</Popover.Title>
            <Popover.Content>Place available time in text format ex: 5PM to 6PM</Popover.Content>
        </Popover>
    );
}

export default TimePopover;