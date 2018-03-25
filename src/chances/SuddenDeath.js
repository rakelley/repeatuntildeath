import Chance from 'chances/Chance';

/**
 * Chance-based trigger for sudden spontaneous deaths
 */
export default class SuddenDeath extends Chance {
    constructor(heartAttackEvent) {
        super();

        this._heartAttack = heartAttackEvent;
    }

    /**
     * @inheritDoc
     */
    trigger() {
        if (this.shouldHappen(1000000)) {
            return this._heartAttack;
        }

        return null;
    }
}
