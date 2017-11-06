import Start from 'locations/Start';
import SuddenDeath from 'chances/SuddenDeath';
import UI from 'core/UI';

/**
 * Main game class
 */
class App {
    constructor() {
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
     * Checks if an environment has already been registered
     * 
     * @param  {Environment} environment
     * @return {Boolean}
     */
    hasEnvironment(environment) {
        return this.environments.includes(environment);
    }

    /**
     * Registers a new environment
     * 
     * @param  {Environment} environment
     * @return {void}
     */
    registerEnvironment(environment) {
        this.environments.push(environment);
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
        if (!this.hasEnvironment(environment)) {
            this.registerEnvironment(environment);
        }

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
         * List of registered environments
         *
         * @private
         * @type {Environment[]}
         */
        this.environments = [];
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

        this.registerChance(SuddenDeath);
        this.changeEnvironment(Start);
    }

    /**
     * Renders the current environment
     *
     * @private
     * @return {void}
     */
    renderEnvironment() {
        UI.render(this.currentEnv);
    }
}

const app = new App();

export default app;
