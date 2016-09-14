import React from 'react';
import List from './shared/list'

import { toDateObj } from './shared/iso';

const Header = ({filename, data}) => {

    const values = {
        'Filename': 			filename,
        'Message Type': data.msgType,
        'Message Version': data.msgVersion,
        'Sender': 			data.sender,
        'Recipient': 			data.recipient,
        'Time of preparation': toDateObj(data.preparationDate, data.preparationTime).toLocaleString(),
        'Control reference': 		data.controlReference,
        'Communication agreement': 	data.communicationAgreement,
        'Message reference number': 	data.msgRefNo,
        'Message type identifier': 	data.msgTypeId,
        'Message type version No': data.msgTypeVerNo,
        'Message type release number': data.msgTypeRelNo,
        'Controlling agency': 		data.controllingAgency,
        'Carrier': 		data.carrierHeader,
        'Association assigned code': 	data.associationCode,
        'Document number': 		data.docNo,
        'Message type': 			data.msgType,
        'Message compilation time': 	data.msgCompilationTime,
        'Discharge voyage number': 	data.dischargeVoyageNo,
        'Estimated time of arrival': 	data.estTimeOfArrival,
        'Actual time of arrival': 		data.actualTimeOfArrival,
        'Place of departure': 		data.placeOfDeparture,
        'Departure time': 		data.departureTime,
        'Next port of call': 		data.nextPort,
        'Vessel call sign': 		data.vesselCallSign,
    };

    return <List values={values} headerWidth={3} bodyWidth={3}/>;
};

export default Header;

