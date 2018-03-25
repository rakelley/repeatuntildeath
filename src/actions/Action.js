/**
 * Base class for actions performable in environments
 */
export default class Action {
    constructor() {
        this._description = '';
        this._callback = function() {};
        this._chances = [];
    }

    /**
     * Accessor for action description
     *
     * @public
     * @return {String}
     */
    get description() {
        return this._description;
    }

    /**
     * Accessor for action callback
     *
     * @public
     * @return {Function}
     */
    get callback() {
        return this._callback;
    }

    /**
     * Accessor for action-specific random triggers
     *
     * @public
     * @return {Chance[]}
     */
    get chances() {
        return this._chances;
    }
}
