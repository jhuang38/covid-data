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
        case 'antigua and barbuda':
        case 'bosnia and herzegovina':
        case 'saint kitts and nevis':
        case 'saint vincent and the grenadines':
        case 'sao tome and principe':
        case 'trinidad and tobago':
        case 'west bank and gaza':
            return rawinput;
        default:
            return parsedInput;
    }
}

export function graphDisplayCountry(rawinput) {
    switch(rawinput.toLowerCase()) {
        case 'us':
        case 'usa':
            return rawinput.toUpperCase();
        case 'antigua and barbuda':
        case 'bosnia and herzegovina':
        case 'saint kitts and nevis':
        case 'saint vincent and the grenadines':
        case 'sao tome and principe':
        case 'trinidad and tobago':
        case 'west bank and gaza':
            return rawinput;
        default:
            return capitalizeString(rawinput);
    }
}

export function modalDisplayCountry(countrytext) {
    // i love taiwan and south korea
    switch(countrytext) {
        case 'Taiwan*':
            return 'Taiwan';
        case 'Korea, South':
            return 'South Korea';
        default:
            return countrytext;
    }
}


export function parseDates(dateobject) {
    return Object.keys(dateobject).sort().reduce((obj, key) => {
        obj[key] = dateobject[key];
        return obj;
    }, {})
}