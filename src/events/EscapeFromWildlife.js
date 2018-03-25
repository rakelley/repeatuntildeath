import Event from 'events/Event';

export default class EscapeFromWildlife extends Event {
    constructor(NavigateFactory) {
        super();

        this.name = 'A suddenly-too-quiet clearing in the forest';
        this.description = `Making shockingly little noise, the predators explode
            from the brush on multiple sides of you.  You raise your arms, yell,
            and generally make a frightened idiot of yourself, but the snapping
            beasts retreat rather than closing in for the kill. That was close.`;
        this.actions = function() {
            return [
                NavigateFactory.create('Retreat to the village', 'Locations_TownSquare'),
                NavigateFactory.create('Stay in the forest', 'Locations_OldForest'),
            ];
        };
    }
}
