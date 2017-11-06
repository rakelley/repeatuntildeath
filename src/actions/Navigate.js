import Action from 'actions/Action';
import App from 'core/App';

/**
 * Simple navigation action
 */
class Navigate extends Action {
    constructor(label, environment) {
        super();

        this._description = label;
        this._callback = function() {
            App.changeEnvironment(environment);
        };
    }
}

/**
 * Navigation action factory
 * 
 * @param  {String}      label       Action label
 * @param  {Environment} environment Environment to navigate to
 * @return {Action}                  Generated action
 */
const init = function(label, environment) {
    return new Navigate(label, environment);
};
export default init;
