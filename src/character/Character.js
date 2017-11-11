import createName from 'character/NameGenerator';

class Character {
    constructor() {
        this._name = createName() + ' ' + createName();
        this._history = new Map();
        this._inventory = new Map();
    }

    get name() {
        return this._name;
    }

    get history() {
        return this._history;
    }

    get inventory() {
        return this._inventory;
    }
}

/**
 * Internal character store
 *
 * @type {?Character}
 */
let current = null;

/**
 * Gets the current character
 *
 * @return {Character}
 */
const getCharacter = function() {
    if (null === current) {
        current = new Character();
    }

    return current;
};

/**
 * Destroys the current character
 *
 * @return {void}
 */
const destroyCharacter = function() {
    current = null;
};

export {getCharacter, destroyCharacter};
