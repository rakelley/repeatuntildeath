import Action from 'actions/Action';

export default class SleepInForest extends Action {
    constructor(wildLifeChance) {
        super();
        this._description = 'Rest a while beneath a great tree';
        this._callback = function() {
            //todo modify character
        };
        this._chances.push(wildLifeChance)
    }
}
