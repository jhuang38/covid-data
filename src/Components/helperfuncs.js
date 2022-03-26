export function capitalizeString(stringInput) {
    return stringInput[0].toUpperCase() + stringInput.slice(1).toLowerCase();
}

export function parseDates(dateobject) {
    // ensure that date object is in order
    return Object.keys(dateobject).sort().reduce((obj, key) => {
        obj[key] = dateobject[key];
        return obj;
    }, {})
}