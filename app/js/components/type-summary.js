import React from 'react';
import List from './shared/list'

const TypeSummary = ({headerData, containerData}) => {

    const categoryTotals = _.countBy(containerData, 'equipmentTypeCategory');

    const qualifierTotals = _.countBy(containerData, 'equipmentQualifier');


    const qualifierResults = {
            'CN':qualifierTotals.CN || 0,
            'BB':qualifierTotals.BB || 0,
            'TE':qualifierTotals.TE  || 0,
            'ZZZ':qualifierTotals.ZZZ  || 0,
            'Error': containerData.length -
                (qualifierTotals.CN || 0) -
                (qualifierTotals.BB) || 0-
                (qualifierTotals.TE  || 0) -
              (qualifierTotals.ZZZ || 0)
    };

    const categoryResults = {
        'RF':categoryTotals.RF || 0,
        'DRY':categoryTotals.DRY || 0,
        'N/A': containerData.length -
        (categoryTotals.RF || 0)-
        (categoryTotals.DRY || 0)
    };

    return (
        <div>
            <p>Total Rows Processed: {headerData.rowCount}</p>

            <List values={qualifierResults} headerWidth={1} bodyWidth={1} showBlank={true} striped/>

            <p>Total by Type: {containerData.length}</p>

            <List values={categoryResults} headerWidth={1} bodyWidth={1} showBlank={true} striped/>

            <p>Total by Category: {containerData.length}</p>

        </div>
    );
};

export default TypeSummary;

