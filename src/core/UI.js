import App from 'core/App';

class UI {
    constructor() {
        this.description = document.getElementById('description');
        this.actions = document.getElementById('actions');
        this.status = document.getElementById('status');
    }

    render(environment) {
        this.setDescription(environment.name, environment.description);

        this.setActions(environment.actions);
    }

    setDescription(name, description) {
        this.description.children[0].textContent = name;
        this.description.children[1].textContent = description;
    }

    setActions(actions) {
        while (this.actions.children.length) {
            this.actions.removeChild(this.actions.children[0]);
        }
        actions.forEach((action) => {
            const button = document.createElement('button');
            button.textContent = action.description;
            button.addEventListener('click', function() {
                App.performAction(action.callback);
            });
            this.actions.appendChild(button);
        });        
    }
}

const ui = new UI();
export default ui;
