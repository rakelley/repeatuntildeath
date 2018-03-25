import Chance from 'chances/Chance';

export default class WildlifeAttack extends Chance {
    constructor(deathEvent) {
        super();

        this._deathEvent = deathEvent;
    }

    /**
     * @inheritDoc
     */
    trigger() {
        if (this.shouldHappen(10)) {
            return this._deathEvent;
        }

        return null;
    }
}
