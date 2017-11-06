import Action from 'actions/Action';
import App from 'core/App';

/**
 * Action for starting a new game
 */
class Restart extends Action {
    constructor() {
        super();

        this._description = 'Begin anew';
        this._callback = function() {
            App.restart();
        };
    }
}

const restart = new Restart();
export default restart;
