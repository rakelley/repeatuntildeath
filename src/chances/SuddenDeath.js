import Chance from 'chances/Chance';
import HeartAttack from 'events/DeathByHeartAttack';

/**
 * Chance-based trigger for sudden spontaneous deaths
 */
class SuddenDeath extends Chance {
    /**
     * @inheritDoc
     */
    trigger() {
        if (this.shouldHappen(1000000)) {
            return HeartAttack;
        }

        return null;
    }
}

const death = new SuddenDeath();
export default death;
