import React from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const numFormat = num => parseInt(num).toLocaleString('de-DE');

const SummaryTable = ({data, summaryField}) => (

    <BootstrapTable
        data={data}
        condensed={true}
        defaultSortName={summaryField}
        defaultSortOrder="asc"
        bordered={false}
        tableStyle={{border: 0, margin: 0}}
    >
        {summaryField == 'dischPort' ? (
        <TableHeaderColumn dataSort={true}
                           isKey={true}
                           dataField="dischPort">
            Port
        </TableHeaderColumn>) : (
            <TableHeaderColumn dataSort={true}
                               isKey={true}
                               dataField="carrierContainer">
                Carrier
            </TableHeaderColumn>)}

        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="units">
            Units
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="teu">
            TEU
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="weight">Total Weight
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="rf">
            RF
        </TableHeaderColumn><TableHeaderColumn dataSort={true}
                                               dataAlign="right"
                                               dataFormat={numFormat}
                                               dataField="dry">
        DRY
    </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataFormat={numFormat}
                           dataField="class">
            Class
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="vgmUnits">
            VGM
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="full">
            Full
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="mt">
            MT
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="forty">
            40'
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="fortyWeight">
            40' weight
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataFormat={numFormat}
                           dataField="twenty">
            20'
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="twentyWeight">
            20' weight
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="bbUnits">
            BB Units
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataAlign="right"
                           dataFormat={numFormat}
                           dataField="bbWeight">
            BB weight
        </TableHeaderColumn>
    </BootstrapTable>
);

export default SummaryTable;