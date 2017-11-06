/**
 * Base class for chance-based triggers
 */
export default class Chance {
    /**
     * Conditionally triggers an event
     *
     * @public
     * @return {?Event} The event that was triggered or null if none
     */
    trigger() {
        return null;
    }

    /**
     * Checks if an event should happen based on its probability
     *
     * @private
     * @param  {Number} probability The probability of the event triggering as a
     *                              number (e.g. 100 for 1 in 100)
     * @return {Boolean}            True if the event should trigger
     */
    shouldHappen(probability) {
        probability = Math.floor(probability);

        const rand = Math.floor(Math.random() * probability) + 1;

        return (rand === probability);
    }
}
