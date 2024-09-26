export const convertToUpperCase = (text) => {
    if (typeof text !== 'string') {
        throw new TypeError('Expected a string as input');
    }
    return text.toUpperCase();
};