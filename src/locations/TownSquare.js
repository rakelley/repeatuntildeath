import Location from 'locations/Location';

class TownSquare extends Location {
    constructor() {
        super();
        this.name = 'Town Square';
        this.description = 'lorem ipsum';
    }
}

const square = new TownSquare();
export default square;
