const toCountry = code => code;

const toDateObj = (date, time) => {
//TODO: Unit check
    if(!date)
        return '';

    date = '20' +
        date.substr(0,2)+
        '-'+
        date.substr(2,2)+
        '-'+
        date.substr(4,2);

    time = time ? (
    ' '+
    time.substr(0,2)+
    ':'+
    time.substr(2,2)):'';

    return new Date(date + time);

};

export { toCountry, toDateObj };



