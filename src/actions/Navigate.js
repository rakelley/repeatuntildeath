import Action from 'actions/Action';

/**
 * Simple navigation action
 */
class Navigate extends Action {
    constructor(app, label, environment) {
        super();

        this._description = label;
        this._callback = function() {
            app.changeEnvironment(environment);
        };
    }
}

export default class NavigateFactory {
    constructor(app) {
        this._app = app;
    }

    /**
     * Navigation action factory
     * 
     * @param  {String}      label       Action label
     * @param  {Environment} environment Environment to navigate to
     * @return {Action}                  Generated action
     */
    create(label, environment) {
        return new Navigate(this._app, label, environment);
    }
}
