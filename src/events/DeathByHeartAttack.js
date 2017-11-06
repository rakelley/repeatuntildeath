import Event from 'events/Event';
import Restart from 'actions/Restart';

class DeathByHeartAttack extends Event {
    constructor() {
        super();

        this.name = 'A vision of the world rapidly fading to black';
        this.description = `Sudden shooting pain in your chest and arm warns you
        too late of your impending fate.  With a low groan, you stagger and sink
        to the ground, your heart's last few erratic pulses echoing hollowly in
        your ears as your brain screams for oxygen.
        `;
        this.actions = [Restart];
    }
}

const death = new DeathByHeartAttack();

export default death;
