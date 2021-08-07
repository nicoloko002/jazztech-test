import Movable from './Movable.mjs';

const actions = Object.assign({
    IRRIGATE: 'I'
}, Movable.actions);

export default class Robot extends Movable {
    static get actions() {
        return actions;
    }

    irrigate() {
        this._actionsHistory.push(actions.IRRIGATE);
    }
}
