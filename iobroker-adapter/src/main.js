'use strict';

const utils = require('@iobroker/adapter-core');

class MyAdapter extends utils.Adapter {
    constructor(options = {}) {
        super({
            ...options,
            name: 'myadapter',
        });
        this.on('ready', this.onReady.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }

    onReady() {
        this.log.info('Adapter is ready');
    }

    onUnload(callback) {
        try {
            callback();
        } catch (e) {
            callback();
        }
    }
}

if (module.parent) {
    module.exports = (options) => new MyAdapter(options);
} else {
    (() => new MyAdapter())();
}
