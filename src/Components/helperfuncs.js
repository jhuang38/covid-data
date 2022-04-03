function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function capitalizeString(stringInput) {
    const splitString = stringInput.split(' ');
    return splitString.map(capitalizeWord).join(' ');
}

// process inputs for api
export function apiInputCountry(rawinput) {
    // deal with countries with names including "and"
    const match_and = / and /gi;
    if (rawinput.match(match_and)) return rawinput;
    const parsedInput = capitalizeString(rawinput);
    switch (parsedInput.toLowerCase()) {
        case 'us':
        case 'united states':
        case 'united states of america':
        case 'usa':
            return 'US';
        case 'taiwan':
            return 'Taiwan*';
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
    // deal with countries with names including "and"
    const match_and = / and /gi;

    if (rawinput.match(match_and)) return rawinput;

    switch(rawinput.toLowerCase()) {
        case 'us':
        case 'usa':
            return rawinput.toUpperCase();
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

export function setGraphData(data_label, y_axis_data, colour) {
    return {
        id: capitalizeString(data_label),
        label: capitalizeString(data_label),
        data: y_axis_data,
        backgroundColor: colour,
        borderColor: colour,
        tension: 1,
        pointRadius: 0
    }
}