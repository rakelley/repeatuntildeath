import Event from 'events/Event';

export default class DeathByWildlife extends Event {
    constructor(restartAction) {
        super();

        this.name = 'A vision of the world rapidly fading to black';
        this.description = `Making shockingly little noise, the predators explode
            from the brush on multiple sides of you.  Your attempts to frighten
            them off, and then fend off their claws and teeth, are equally in
            vain. You quickly succumb to pain and blood loss as they relentlessly
            work together to take you down.`;
        this.actions = [restartAction];
    }
}
