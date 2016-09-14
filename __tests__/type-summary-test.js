jest.disableAutomock();

const edi = require('../server/modules/baplie-parser');
const lookups = require('../server/modules/lookups');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const tests = [
    {
        filename:'test-data/ALGOL-224-NB-PAI.edi',
        CN:234,
        categoryErrors: 0,
        rowCount: 1
    },
    {
        filename:'test-data/KOTEK16_418ND2LYT_2_2_VGM.edi',
        CN:234,
        qualifierErrors: 0,
        rowCount: 1

    }
];


const runTest = (testData) => describe(`Type Summary  - ${testData.filename}`, () => {


    const fileData = fs.readFileSync(path.resolve(testData.filename));

    it('reports correct values', () => {

        return lookups.loadData().then(
            (lookupData) => edi.parse(fileData, lookupData).then((data) => {

                expect(data.headerData.rowCount).toBe(testData.rowCount);

                const categoryTotals = _.countBy(data.containerData, 'equipmentTypeCategory');

                const qualifierTotals = _.countBy(data.containerData, 'equipmentQualifier');

                expect(qualifierTotals.CN).toBe(testData.CN);

                expect(data.length -
                    (qualifierTotals.CN || 0) -
                    (qualifierTotals.BB) || 0 -
                    (qualifierTotals.TE || 0) -
                    (qualifierTotals.ZZZ || 0)).toBe(testData.qualifierErrors);

                expect(categoryTotals.RF).toBe(testData.RF);

                expect(data.length -
                    (categoryTotals.RF || 0) -
                    (categoryTotals.DRY) || 0).toBe(testData.categoryErrors);

            })
        );

    });


});


tests.forEach(testData => runTest(testData));




