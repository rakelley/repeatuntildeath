import container from 'core/container';

const defaultChances = [
    container.Chances_SuddenDeath,
];

container.App.init(container.UI, container.Locations_Start, defaultChances);