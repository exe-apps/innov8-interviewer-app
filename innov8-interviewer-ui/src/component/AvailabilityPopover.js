import React from 'react';
import Popover from 'react-bootstrap/Popover';

const AvailabilityPopover = (props) => {
    return (
        <Popover id="popover-basic" {...props}>
            <Popover.Title as="h3">Availability</Popover.Title>
            <Popover.Content>Place available days in text format ex: Monday, Tuesday and Friday</Popover.Content>
        </Popover>
    );
}

export default AvailabilityPopover;