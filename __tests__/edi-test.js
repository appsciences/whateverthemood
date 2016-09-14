jest.disableAutomock();

const edi = require('../server/modules/baplie-parser');
const lookups = require('../server/modules/lookups');
const fs = require('fs');
const path = require('path');

const tests = [    {
    filename:'test-data/KOTEK16_418ND1LYT_NZLYT_LPC_3.edi',
    contId: 'UTCU4939646',
    headerResult:{
        "sender": "WNE_VGM",
        "recipient": "XXRNA",
        "preparationDate": "160719",
        "preparationTime": "1006",
        "controlReference": "1468922809C3ED",
        "communicationAgreement": "RNA OPS CENTER",
        "msgType": "BAPLIE:D:95B",
        "msgVersion": "SMDG 2.0",
        "docNo": "CAPSTAN4.20160719100649",
        "msgFunction": "First or basic message",
        "msgCompilationTime": "1607191006UTC",
        "msgCompilationTimeFormat": "301",
        "dischargeVoyageNo": "418S",
        "carrierHeader": "HS",
        "placeOfDeparture": "NZLYT",
        "nextPort": "NZNPE",
        "actualTimeOfArrival": "1601311900",
        "actualTimeOfArrivalFormat": "201",
        "estTimeOfDeparture": "1602011900",
        "estTimeOfDepartureFormat": "201",
        "estTimeOfArrival": "1602022000",
        "estTimeOfArrivalFormat": "201",
        "rowCount": 10389
    },
    testResult: {
        "slot": "0050202",
        "bay": "005",
        "locationFormat": "ISO BBBRRTT",
        "descOfGoods": "",
        "measurementAppQualifier": "WT",
        "weight": "24570",
        "weightUnit": "KGM",
        "loadPort": "ECGYE",
        "dischPort": "COCTG",
        "delPort": "ESBIO",
        "equipmentQualifier": "CN",
        "containerId": "UTCU4939646",
        "containerSize": "20'",
        "containerHeight": "8'6''",
        "containerLength": "20'",
        "containerWidth": "",
        "containerType": "TK",
        "containerTypeFull": "22T0",
        "equipmentTypeCategory": "TK",
        "containerFull": "Full",
        "carrierContainer": "HSD"
    }
},

    {
        filename:'test-data/ALGOL-224-NB-PAI.edi',
        contId: 'UTCU4939646',
        headerResult:{
            "sender": "WNE_VGM",
            "recipient": "XXRNA",
            "preparationDate": "160719",
            "preparationTime": "1006",
            "controlReference": "1468922809C3ED",
            "communicationAgreement": "RNA OPS CENTER",
            "msgType": "BAPLIE:D:95B",
            "msgVersion": "SMDG 2.0",
            "docNo": "CAPSTAN4.20160719100649",
            "msgFunction": "First or basic message",
            "msgCompilationTime": "1607191006UTC",
            "msgCompilationTimeFormat": "301",
            "dischargeVoyageNo": "418S",
            "carrierHeader": "HS",
            "placeOfDeparture": "NZLYT",
            "nextPort": "NZNPE",
            "actualTimeOfArrival": "1601311900",
            "actualTimeOfArrivalFormat": "201",
            "estTimeOfDeparture": "1602011900",
            "estTimeOfDepartureFormat": "201",
            "estTimeOfArrival": "1602022000",
            "estTimeOfArrivalFormat": "201",
            "rowCount": 10389
        },
        testResult: {
            "slot": "0050202",
            "bay": "005",
            "locationFormat": "ISO BBBRRTT",
            "descOfGoods": "",
            "measurementAppQualifier": "WT",
            "weight": "24570",
            "weightUnit": "KGM",
            "loadPort": "ECGYE",
            "dischPort": "COCTG",
            "delPort": "ESBIO",
            "equipmentQualifier": "CN",
            "containerId": "UTCU4939646",
            "containerSize": "20'",
            "containerHeight": "8'6''",
            "containerLength": "20'",
            "containerWidth": "",
            "containerType": "TK",
            "containerTypeFull": "22T0",
            "equipmentTypeCategory": "TK",
            "containerFull": "Full",
            "carrierContainer": "HSD"
        }
    },
    {
        filename:'test-data/KOTEK16_418ND2LYT_2_2_VGM.edi',
        contId: 'TRIU8029180',
        headerResult:{},
        testResult: {
            "slot": "0340190",
            "bay": "034",
            "locationFormat": "ISO BBBRRTT",
            "measurementAppQualifier": "WT",
            "weight": "4720",
            "weightUnit": "KGM",
            "loadPort": "HKHKG",
            "dischPort": "NZNPE",
            "delPort": "NZNPE",
            "equipmentQualifier": "CN",
            "containerId": "TRIU8029180",
            "containerSize": "40'",
            "containerHeight": "9'6''",
            "containerLength": "40'",
            "containerWidth": "",
            "containerType": "RH",
            "containerTypeFull": "45R1",
            "equipmentTypeCategory": "RF",
            "containerFull": "",
            "carrierContainer": "NYK"
        }    }
];

const runTest = (testData) =>
describe(`Edi Test - ${testData.filename}`, () => {

    const fileData = fs.readFileSync(path.resolve(testData.filename));
    //const data = fs.readFileSync(path.resolve('test-data/test1.edi'));

    it('identifies header records', () => {

            expect(edi.isHeaderRecord(['BGM'])).toBeTruthy();
            expect(edi.isHeaderRecord(['LOC','5'])).toBeTruthy();
            expect(edi.isHeaderRecord(['LOC','6'])).toBeFalsy();
            expect(edi.isHeaderRecord(['EQD','5'])).toBeFalsy();
        }

    );

    it(`finds container ${testData.contId} and it has correct values`, () => {

        return lookups.loadData().then(
            (lookupData) => edi.parse(fileData, lookupData).then(result => {
                const rec = result.containerData.find(r=>r.containerId === testData.contId);

                expect(rec.header).toEqual(testData.headerResult)

                expect(rec).toBeDefined();

                expect(rec).toEqual(testData.testResult);

            })
                .catch(err => {
                    throw(new Error(`Error parsing edi file: ${err.message}`))
                })
        )
    });

    it('formats the version number', () => {
        expect(edi.formatVersion('SMDG22')).boBe('SMDG2.2');
    });

});



tests.forEach(testData => runTest(testData));

