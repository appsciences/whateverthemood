import React from 'react';
import SummaryTable from './summary-table'
import {summarizeBy, addTotals} from './calc';

import {Nav, NavItem} from 'react-bootstrap';

const Summary = React.createClass({
    getInitialState() {
        return {summaryField: 'dischPort'};
    },

    render(){
        return (
            <div>
                <Nav bsStyle="pills" activeKey={this.state.summaryField} onSelect={summaryField => this.setState({summaryField})}>
                    <NavItem eventKey='dischPort' href="/home">By Port</NavItem>
                    <NavItem eventKey='carrierContainer' title="Item">By Carrier</NavItem>
                </Nav>
                <SummaryTable
                    data={addTotals(summarizeBy(this.props.data, this.state.summaryField))}
                    summaryField={this.state.summaryField}
                />
            </div>

        );
    }
});

export default Summary;