/**
 * ALl consonants
 *
 * @type {String[]}
 */
const consonants = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'z',
];

/**
 * All vowels
 *
 * @type {String[]}
 */
const vowels = [
    'a',
    'e',
    'i',
    'o',
    'u',
    'y',
];

/**
 * All letters
 *
 * @type {String[]}
 */
const letters = consonants.concat(vowels);

/**
 * Optional modifier characters for inclusion between first letter and first
 * vowel to increase variety and naturalness
 *
 * @type {String[]}
 */
const modifiers = [
    'l',
    'r',
    '\'',
    'y',
    'h',
];

/**
 * Gets 1 consonant character
 *
 * @return {String}
 */
const getConsonant = function() {
    return consonants[Math.floor(Math.random() * consonants.length)];
};

/**
 * Gets 1 vowel character
 *
 * @return {String}
 */
const getVowel = function() {
    return vowels[Math.floor(Math.random() * vowels.length)];
};

/**
 * Gets 1 letter
 *
 * @return {String}
 */
const getLetter = function() {
    return letters[Math.floor(Math.random() * letters.length)];
}

/**
 * Gets 0 or more random vowels
 *
 * @return {String}
 */
const getBonusVowel = function() {
    const bonus = [];
    while (Math.round(Math.random() * 2) === 2) {
        bonus.push(getVowel());
    }

    return bonus.join('');
};

/**
 * Gets 0 or 1 random modifier characters
 *
 * @return {String}
 */
const getModifier = function() {
    if (Math.ceil(Math.random() * 5) === 5) {
        return modifiers[Math.floor(Math.random() * modifiers.length)];
    }

    return '';
};

/**
 * Creates a name fragment
 *
 * @return {String}
 */
const getPart = function() {
    const part = [];

    part.push(getLetter());
    part.push(getModifier());
    part.push(getVowel());
    part.push(getBonusVowel());
    part.push(getConsonant());
    part.push(getBonusVowel());

    return part.join('');
};

/**
 * Random name generator
 *
 * @return {String}
 */
const createName = function() {
    const length = Math.floor(Math.random() * 4) + 1;
    const parts = [];

    while (parts.length < length) {
        const newPart = getPart();
        if (!parts.includes(newPart)) {
            parts.push(newPart);
        }
    }

    const name = parts.join('');

    return name.charAt(0).toUpperCase() + name.slice(1);
};

export default createName;
