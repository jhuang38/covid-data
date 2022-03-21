export default function parseDates(dateobject) {
    // ensure that date object is in order
    return Object.keys(dateobject).sort().reduce((obj, key) => {
        obj[key] = dateobject[key];
        return obj;
    }, {})
}