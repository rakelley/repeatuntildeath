/**
 * Base class for actions performable in environments
 */
export default class Action {
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
}
