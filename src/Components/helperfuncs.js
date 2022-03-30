function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function capitalizeString(stringInput) {
    const splitString = stringInput.split(' ');
    return splitString.map(capitalizeWord).join(' ');
}

// process inputs for api
export function apiInputCountry(rawinput) {
    const parsedInput = capitalizeString(rawinput);
    switch (parsedInput.toLowerCase()) {
        case 'us':
        case 'united states':
        case 'united states of america':
        case 'usa':
            return 'US';
        case 'taiwan':
            return 'Taiwan*'
        case 'uk':
        case 'britain':
        case 'great britain':
            return 'United Kingdom';
        case 'south korea':
            return 'Korea, South';
        default:
            return parsedInput;
    }
}

export function graphDisplayCountry(rawinput) {
    switch(rawinput.toLowerCase()) {
        case 'us':
        case 'usa':
            return rawinput.toUpperCase();
        default:
            return capitalizeString(rawinput);
    }
}


export function parseDates(dateobject) {
    return Object.keys(dateobject).sort().reduce((obj, key) => {
        obj[key] = dateobject[key];
        return obj;
    }, {})
}