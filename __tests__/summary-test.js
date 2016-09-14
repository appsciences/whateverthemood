jest.disableAutomock();

const edi = require('../server/modules/baplie-parser');
const lookups = require('../server/modules/lookups');
const fs = require('fs');
const path = require('path');
const calc = require('../app/js/components/calc');

const tests = [
    {
        filename:'test-data/ALGOL-224-NB-PAI.edi',
        summaryField:'dischPort',
        summaryFieldValue:'COCTG',
        results:{
            units: 174,
            teu: 296,
            weight: 3830638,
            rf: 50,
            dry: 124,
            'class': 1,
            full: 174,
            mt: 0,
            forty: 122,
            fortyWeight: 2640.8,
            twenty: 52,
            twentyWeight: 1189.8,
            bbUnits: 0,
            bbWeight: 0,
            vgmUnits: 0,

        }
    },
    {
        filename:'test-data/KOTEK16_418ND2LYT_2_2_VGM.edi',
        summaryField:'dischPort',
        summaryFieldValue:'KRPUS',
        results:{
            units: 64,
            teu: 99,
            weight: 1430,
            rf: 13,
            dry: 51,
            'class': 0,
            full: 62,
            mt: 2,
            forty: 35,
            fortyWeight: 938,
            twenty: 29,
            twentyWeight: 942,
            bbUnits: 0,
            bbWeight: 0,
            vgmUnits: 0

        }

    },
    {
        filename:'test-data/ALGOL-224-NB-PAI.edi',
        summaryField:'carrierContainer',
        summaryFieldValue:'HSD',
        results:{
            units: 174,
            teu: 296,
            weight: 3830638,
            rf: 50,
            dry: 124,
            'class': 1,
            full: 174,
            mt: 0,
            forty: 122,
            fortyWeight: 2640.8,
            twenty: 52,
            twentyWeight: 1189.8,
            bbUnits: 0,
            bbWeight: 0,
            vgmUnits: 0,

        }
    },    {
        filename:'test-data/KOTEK16_418ND2LYT_2_2_VGM.edi',
        summaryField:'carrierContainer',
        summaryFieldValue:'COS',
        results:{
            units: 64,
            teu: 99,
            weight: 1430,
            rf: 13,
            dry: 51,
            'class': 0,
            full: 62,
            mt: 2,
            forty: 35,
            fortyWeight: 938,
            twenty: 29,
            twentyWeight: 942,
            bbUnits: 0,
            bbWeight: 0,
            vgmUnits: 0

        }

    }

];


const runTest = ({filename, summaryField, summaryFieldValue, results}) => describe(`${summaryField} summary - ${filename}`, () => {


    const fileData = fs.readFileSync(path.resolve(filename));

    it(`reports correct values`, () => {

        return lookups.loadData().then(
            (lookupData) => edi.parse(fileData, lookupData).then(result => {

                const summary = calc.summarizeBy(result.containerData, summaryField)
                    .find(s=>s[summaryField] === summaryFieldValue);

                expect(summary).toBeDefined();

                expect(
                    summary
                ).toEqual(
                    results
                );

            })
                .catch(err => {
                    throw(new Error(`Error parsing edi file: ${err.message}`))
                })
        )
    });

});


tests.forEach(testData => runTest(testData));





