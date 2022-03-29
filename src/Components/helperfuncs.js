function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function capitalizeString(stringInput) {
    const splitString = stringInput.split(' ');
    return splitString.map(capitalizeWord).join(' ');
}


export function parseDates(dateobject) {
    return Object.keys(dateobject).sort().reduce((obj, key) => {
        obj[key] = dateobject[key];
        return obj;
    }, {})
}