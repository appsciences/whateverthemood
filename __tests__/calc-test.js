jest.disableAutomock();


const Calc = require('../app/js/components/calc');

const data = require('../test-data/calc-data');

xdescribe('Calc Summarize', () => {

    const result = Calc.summarize(data);

    const port1Data = result.find(o =>o.port == 'Port1');
    const port2Data = result.find(o =>o.port == 'Port2');


    it('Port 1 Forty Weight', () => {
        expect(port1Data.fortyWeight).toBe(25);
    });

    it('Testing Port 1 TEU', () => {
        expect(port1Data.teu).toBe(5);

    });
    it('Testing Port 1 BB Units', () => {
        expect(port1Data.bbUnits).toBe(2);

    });
    it('Testing Port 2 twenty Weight', () => {
        expect(port2Data.twentyWeight).toBe(15 + 18);
    });
    it('Testing Port 1 TEU', () => {
        expect(port1Data.teu).toBe(2+2+1);
    });
    it('Testing Port 1 RF', () => {
        expect(port1Data.rf).toBe(2);
    });
    it('Testing Port 1 VGM', () => {
        expect(port1Data.vgmUnits).toBe(2);
    });

});


describe('Obj to Array', () => {
    it('Obj to array', () => {
        expect(Calc.objToArr(
            {
                Port1: {weight: '4'}
            },
            'port'
        )).toEqual([{port: 'Port1', weight: '4'}]);
    });
});

