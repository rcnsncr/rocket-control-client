import React, { useState } from 'react';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'

const Info = props => {

    const [description] = useState(props.description);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            { description }
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement="top-start"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <Button variant="primary">i</Button>
        </OverlayTrigger>        
    );
};



export default Info;
