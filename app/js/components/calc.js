import _ from 'lodash';

/**
 *
 * {foo:[{bar:bla}]} => [{keyname:foo, bar:bla}]
 *
 * @param obj to transform to array
 * @param keyName to add to each array member
 * @returns {*}
 */
function objToArr(obj, keyName){

    return _.transform(
        obj,
        (result, value, key) =>
            result.push(Object.assign({[keyName]:key}, value))
        ,
        []
    );

}

//TODO: container size as '20\'' is shit

const summarize = (data) => {

    const qualifierTotals = _.countBy(data, 'equipmentQualifier');
    const sizeTotals = _.countBy(data, 'containerSize');
    const categoryTotals = _.countBy(data, 'equipmentTypeCategory');

    return ({
        units: data.length,
        teu: _.sumBy(
            data,
            c => ({'40\'': 2, '20\'': 1}[c.containerSize])
        ),
        weight:_.sumBy(data,c => parseInt(c.weight)),
        rf:categoryTotals.RF || 0,
        dry:categoryTotals.DRY || 0,
        'class':0,
        full:_.countBy(data, 'containerFull').Full || 0,
        mt:_.sumBy(data, c => c.containerFull === ''),
        forty:sizeTotals['40\''],
        fortyWeight:_.sumBy(data, c => c.containerSize == '40\'' && parseInt(c.weight)),
        twenty:sizeTotals['20\''],
        twentyWeight:_.sumBy(data, c => c.containerSize == '20\'' && parseInt(c.weight)),
        bbUnits:qualifierTotals.BB || 0,
        bbWeight: _.sumBy(data, c => c.equipmentQualifier == 'BB' && parseInt(c.weight)),
        vgmUnits: _.countBy(data, 'measurementAppQualifier').VGM || 0

    })
};

/**
 * Computes summaries by port, then transofrms into array for rendering
 * @param data
 * @param by field to summarize by
 */
const summarizeBy = (data, by) =>

    objToArr(
        _.mapValues(
            _.groupBy(data, by),
            summarize
        ),
        by);

const addTotals = (data) =>
    data.concat({
        dischPort: 'Totals:',
        units:_.sumBy(data, 'units'),
        teu: _.sumBy(data, 'teu'),
        rf:_.sumBy(data, 'rf'),
        dry:_.sumBy(data, 'dry'),
        full:_.sumBy(data, 'full'),
        mt:_.sumBy(data, 'mt'),
        forty:_.sumBy(data, 'forty'),
        fortyWeight:_.sumBy(data, 'fortyWeight'),
        twenty:_.sumBy(data, 'twenty'),
        twentyWeight:_.sumBy(data, 'twentyWeight'),
        weight:_.sumBy(data, 'weight'),
        bbUnits:_.sumBy(data, 'bbUnits'),
        bbWeight:_.sumBy(data, 'bbWeight'),
        'class':_.sumBy(data, 'class'),
        vgmUnits:_.sumBy(data, 'vgmUnits')

    })

export {summarize, summarizeBy,  objToArr, addTotals};