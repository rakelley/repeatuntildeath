import Bottle from 'bottlejs';
import App from 'core/App';
import UI from 'core/UI';
import Actions_NavigateFactory from 'actions/Navigate';
import Actions_Restart from 'actions/Restart';
import Actions_SleepInForest from 'actions/SleepInForest';
import Chances_SuddenDeath from 'chances/SuddenDeath';
import Chances_WildlifeAttack from 'chances/WildlifeAttack';
import Events_DeathByHeartAttack from 'events/DeathByHeartAttack';
import Events_DeathByWildlife from 'events/DeathByWildlife';
import Events_EscapeFromWildlife from 'events/EscapeFromWildlife';
import Locations_OldForest from 'locations/OldForest';
import Locations_Start from 'locations/Start';
import Locations_TownSquare from 'locations/TownSquare';

const bottle = new Bottle();
bottle.service('App', App);
bottle.factory('Actions_NavigateFactory', function(container) {
    return new Actions_NavigateFactory(container);
});
bottle.service('Actions_Restart', Actions_Restart);
bottle.service('Actions_SleepInForest', Actions_SleepInForest, 'Chances_WildlifeAttack');
bottle.service('Chances_SuddenDeath', Chances_SuddenDeath, 'Events_DeathByHeartAttack');
bottle.service('Chances_WildlifeAttack', Chances_WildlifeAttack, 'Events_DeathByWildlife', 'Events_EscapeFromWildlife');
bottle.service('Events_DeathByHeartAttack', Events_DeathByHeartAttack, 'Actions_Restart');
bottle.service('Events_DeathByWildlife', Events_DeathByWildlife, 'Actions_Restart');
bottle.service('Events_EscapeFromWildlife', Events_EscapeFromWildlife, 'Actions_NavigateFactory');
bottle.service('Locations_OldForest', Locations_OldForest, 'Actions_NavigateFactory', 'Actions_SleepInForest');
bottle.service('Locations_TownSquare', Locations_TownSquare, 'Actions_NavigateFactory');
bottle.service('Locations_Start', Locations_Start, 'Actions_NavigateFactory');
bottle.service('UI', UI);

export default bottle.container;
