import {getCharacter, destroyCharacter} from 'character/Character';

/**
 * Main game class
 */
export default class App {
    /**
     * @param  {UI}       ui
     * @param  {Location} startLocation
     * @param  {Chance[]} defaultChances
     * 
     * @return {void}
     */
    init(ui, startLocation, defaultChances) {
        this._defaultChances = defaultChances;
        this._startLocation = startLocation;
        this._ui = ui;

        this.setDefault();
        this.renderEnvironment();
    }

    /**
     * Checks if a chance has already been registered
     *
     * @param  {Chance} chance
     * @return {Boolean}
     */
    hasChance(chance) {
        return this.chances.includes(chance);
    }

    /**
     * Registers a new chance-based trigger
     *
     * @param  {Chance} chance
     * @return {void}
     */
    registerChance(chance) {
        this.chances.push(chance);
    }

    /**
     * Performs a game action
     *
     * @public
     * @param  {Function} callable Action to perform
     * @return {void}
     */
    performAction(callable) {
        callable();

        let event = null;
        for (let i = 0, len = this.chances.length; i < len; ++i) {
            event = this.chances[i].trigger();
            if (event) {
                this.changeEnvironment(event);
                break;
            }
        }

        this.renderEnvironment();
    }

    /**
     * Changes the current environment the character is in
     *
     * @public
     * @param  {Environment} environment
     * @return {void}
     */
    changeEnvironment(environment) {
        this.lastEnv = this.currentEnv;
        this.currentEnv = environment;
    }

    /**
     * Starts a new game session
     *
     * @public
     * @return {void}
     */
    restart() {
        destroyCharacter();
        this.setDefault();
    }

    /**
     * Resets default game state
     *
     * @private
     * @return {void}
     */
    setDefault() {
        /**
         * List of registered chance-based triggers
         *
         * @private
         * @type {Chance[]}
         */
        this.chances = [];
        /**
         * Current environment character is in
         *
         * @private
         * @type {?Environment}
         */
        this.currentEnv = null;
        /**
         * Previous environment character was in
         *
         * @private
         * @type {?Environment}
         */
        this.lastEnv = null;
        /**
         * Current character
         *
         * @type {!Character}
         */
        this.character = getCharacter();

        this._defaultChances.forEach(this.registerChance.bind(this));
        this.changeEnvironment(this._startLocation);
    }

    /**
     * Renders the current environment
     *
     * @private
     * @return {void}
     */
    renderEnvironment() {
        this._ui.render(this, this.currentEnv, this.character);
    }
}
