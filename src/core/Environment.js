/**
 * Base class for any environment the player inhabits (permanent locations,
 * temporary events, etc)
 */
export default class Environment {
    constructor() {
        this._name = null;
        this._description = null;
        this._actions = [];
    }

    /**
     * Accessor for brief title of environment
     * 
     * @return {String}
     */
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    /**
     * Accessor for long description of environment
     * 
     * @return {String}
     */
    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    /**
     * Accessor for list of possible actions that can be taken
     * 
     * @return {Action[]}
     */
    get actions() {
        return this._actions;
    }

    set actions(actions) {
        this._actions = actions;
    }
}
