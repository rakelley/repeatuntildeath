import Location from 'locations/Location';

export default class OldForest extends Location {
    constructor(NavigateFactory, sleepAction) {
        super();
        this.name = 'Old Forest';
        this.description = `The ancient forest dominates the landscape surrounding
                            the village for miles in every direction.  It is hard
                            to see very far in, but the echoes of strange calls
                            tell you that it teems with life, likely not all
                            friendly.`;
        this.actions = function() {
            return [
                NavigateFactory.create('Retreat to the village', 'Locations_TownSquare'),
                sleepAction
            ];
        };
    }
}
