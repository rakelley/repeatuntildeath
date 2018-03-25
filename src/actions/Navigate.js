import Action from 'actions/Action';

/**
 * Simple navigation action
 */
class Navigate extends Action {
    constructor(label, environment) {
        super();

        this._description = label;
        this._callback = function(app) {
            app.changeEnvironment(environment);
        };
    }
}

export default class NavigateFactory {
    constructor(container) {
        this._container = container;
    }

    /**
     * Navigation action factory
     *
     * @param  {String} label       Action label
     * @param  {String} environment Name of Environment to navigate to
     *
     * @return {Action} Generated action
     */
    create(label, environment) {
        return new Navigate(label, this._container[environment]);
    }
}
