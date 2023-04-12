import { Brick, registerBrick } from 'olympe';

export default class ConsoleLog extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} myObject
     * @param {!Array} outputs
     */
    update($, [label, myObject], outputs) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        console.log(label, myObject)
    }
}

registerBrick('0183be7008a42b8aa2ed', ConsoleLog);
