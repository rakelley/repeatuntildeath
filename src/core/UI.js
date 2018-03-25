
export default class UI {
    constructor() {
        this.name = document.querySelector('[data-location-name]');
        this.description = document.querySelector('[data-description]');
        this.messages = document.querySelector('[data-messages]');
        this.actions = document.querySelector('[data-actions]');
        this.status = document.querySelector('[data-status]');
    }

    /**
     * Updates UI state
     *
     * @param  {App}      app
     * @param  {Environment} environment Current environment
     * @param  {Character}   character   Current character
     * @return {void}
     */
    render(app, environment, character) {
        this.setDescription(environment.name, environment.description);

        this.setActions(app, environment.actions);

        this.displayStatus(character);
    }

    /**
     * Adds a log message
     *
     * @public
     * @param  {String} message New log message
     * @return {void}
     */
    pushMessage(message) {
        while (this.messages.children.length >= 4) {
            this.messages.removeChild(this.messages.firstChild);
        }

        const newMessage = document.createElement('li');
        newMessage.textContent = message;
        this.messages.appendChild(message);
    }

    /**
     * Sets the displayed environment description
     *
     * @private
     * @param  {String} name
     * @param  {String} description
     * @return {void}
     */
    setDescription(name, description) {
        this.name.textContent = name;
        this.description.textContent = description;
    }

    /**
     * Sets the actions currently available to choose
     *
     * @private
     * @param  {App}      app
     * @param  {Action[]} actions
     * @return {void}
     */
    setActions(app, actions) {
        while (this.actions.children.length) {
            this.actions.removeChild(this.actions.children[0]);
        }
        actions.forEach((action) => {
            const button = document.createElement('button');
            button.textContent = action.description;
            button.addEventListener('click', function() {
                app.performAction(action.callback);
            });
            this.actions.appendChild(button);
        });
    }

    /**
     * Renders character status
     *
     * @private
     * @param  {Character} character
     * @return {void}
     */
    displayStatus(character) {
        while (this.status.lastChild) {
            this.status.removeChild(this.status.lastChild);
        }

        const name = document.createElement('p');
        name.textContent = 'Name: ' + character.name;
        this.status.appendChild(name);

        const invLabel = document.createElement('p');
        invLabel.textContent = 'Inventory:';
        this.status.appendChild(invLabel);
    }
}
