import Action from 'actions/Action';

/**
 * Action for starting a new game
 */
export default class Restart extends Action {
    constructor(app) {
        super();

        this._description = 'Begin anew';
        this._callback = app.restart.bind(app);
    }
}
