import Chance from 'chances/Chance';

export default class WildlifeAttack extends Chance {
    constructor(deathEvent, escapeEvent) {
        super();

        this._deathEvent = deathEvent;
        this._escapeEvent = escapeEvent;
    }

    /**
     * @inheritDoc
     */
    trigger() {
        if (this.shouldHappen(200)) {
            if (this.shouldHappen(2)) {
                return this._deathEvent;
            }

            return this._escapeEvent;
        }

        return null;
    }
}
