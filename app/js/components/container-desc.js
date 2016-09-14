import List from './shared/list'

import React from 'react';

import {toCountry} from './shared/iso';



const ContainerDesc = ({data}) => {
    const values = {
        'Container No': data.containerId,
        'Stowage Cell Format': data.locationFormat,
        'Place of Delivery': toCountry(data.dischPort),
        'Container Type': data.containerTypeFull,
        'Length': data.containerLength,
        'Height': data.containerHeight,
        'Width': data.containerWidth,
        'Group Type': data.containerType,
        'Description of Goods': data.descOfGoods,
        'Handling Instructions': data.handlingInstructions,
        'Container Loading Remarks': data.containerLoadingRemarks,
        'Special instructions': data.specialInstructions,
        'Certification statements': data.certificationStatements,
        'Mutually defined use': data.mutuallyDefinedUse
    };

    return <List values={values} headerWidth={1} bodyWidth={4}/>;
};

export default ContainerDesc;