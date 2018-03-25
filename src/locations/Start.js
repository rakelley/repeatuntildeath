import Location from 'locations/Location';

/**
 * Starting location for new games
 */
export default class Start extends Location {
    constructor(NavigateFactory) {
        super();

        this.name = 'The outskirts of a modest village';
        this.description = `You dully eye the village laid out before you through
            the bone-deep weariness of the many miles your body has traveled.
            This wasn't your destination (not that you really had one set), but
            your stained and threadbare clothes and empty stomach demand that
            you stop.  Your old life is gone forever, and what hope you may have
            of a new one here is uncertain.  You will your feet to carry you a
            little further.`;
        this.actions = function() {
            return [NavigateFactory.create('Enter Town', 'Locations_TownSquare')];
        };
    }
}
