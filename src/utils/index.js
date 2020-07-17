import { colors, colorsOrder } from "../constants";

export const getFirstLetters = (name) => {
    let result = name.split(' ').slice(0, 2).reduce((response, word) => response += word.slice(0, 1).toUpperCase(), '');
    if (result.length === 0)
        return 'ФИ';
    return result;
};

export const getColorStyleByValue = (value) => {
    const colorItem = colors.find(color => value === color.value);
    return colorItem ? colorItem.color : colors[0].color;
}

export const sortBy = (arr, key, isAscending) => {
    return arr.slice(0).sort(function(a,b) {
        let orderFieldA = a[key];
        let orderFieldB = b[key];
        if (key === 'color') {
            orderFieldA = colorsOrder[a[key]];
            orderFieldB = colorsOrder[b[key]];
        }
        const compareResult = (orderFieldA > orderFieldB) ? 1 : (orderFieldA < orderFieldB) ? -1 : 0;
        return isAscending ? compareResult : -compareResult;
    });
}