
/**
 * Module dependencies.
 */

var warehouse = require('./warehouse');
var EventEmitter = require('events');
var model = require('./model');

/**
 * Create all tables in the model.
 */

var emitter = new EventEmitter();
emitter.setMaxListeners(0);
for (var i = 0; i < model.length; i++) {
  warehouse.create(model[i].table_name, model[i].headers);
}

