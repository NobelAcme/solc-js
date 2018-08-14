var wrapper = require('./wrapper.js');

module.exports = wrapper(require('./soljson.js'));

module.expots = wrapper(require('./linker.js'))