import _ from 'lodash';
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

function section(header, body,headerWidth, bodyWidth, index, stripe) {
    return (
        <Row  key={index} style={{bgColor: stripe ? '#f5f5f5' : '#ffffff' }}>
            <Col lg={headerWidth}>
                {header}:
            </Col>
            <Col lg={bodyWidth}>
                {body}
            </Col>
        </Row>);
}

const List = ({values, headerWidth, bodyWidth, showBlank, striped}) => {
    //for striping
    var i=0;

    return (
        <Grid>
        {Object.keys(values).map(
            (header, index) =>
                (values[header] || showBlank) &&
                section(
                    header,
                    values[header],
                    headerWidth,
                    bodyWidth, index, striped && (index % 2)))}
        </Grid>
    );
};

export default List;

