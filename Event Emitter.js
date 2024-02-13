// https://leetcode.com/problems/event-emitter/description/?envType=study-plan-v2&envId=30-days-of-javascript


class EventEmitter {
    constructor() {
        this.subscriptions = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        const id = Symbol(callback);
        this.subscriptions.set(eventName, this.subscriptions.has(eventName)
            ? [...this.subscriptions.get(eventName), { id, callback }]
            : [{ id, callback }]
        );

        return {
            unsubscribe: () => this.subscriptions.set(eventName, this.subscriptions.get(eventName).filter(({ id: subId }) => subId !== id))
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        return (this.subscriptions.get(eventName) || []).map(({ callback }) => callback(...args));
    }
}