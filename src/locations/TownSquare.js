import Location from 'locations/Location';

export default class TownSquare extends Location {
    constructor(NavigateFactory) {
        super();
        this.name = 'Town Square';
        this.description = 'lorem ipsum';
        this.actions = function() {
            return [NavigateFactory.create('Head to the woods', 'Locations_OldForest')]
        };
    }
}
