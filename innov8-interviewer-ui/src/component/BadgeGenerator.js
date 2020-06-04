import React, { Fragment } from 'react';
import Badge from 'react-bootstrap/Badge';

const BadgeGenerator = (props) => {
    const { specialization } = props;
    return (
        <Fragment>
             {specialization === 'Fullstack' && <Badge variant='light' pill>FS</Badge>}
             {specialization === 'UI' && <Badge variant='success' pill>UI</Badge>}
             {specialization === 'Webservices' && <Badge variant='warning' pill>WS</Badge>}
        </Fragment>
    );
}

export default BadgeGenerator;