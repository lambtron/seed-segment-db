
/**
 * Module dependencies.
 */

var moment = require('moment');
var faker = require('faker');
var uuid = require('uuid');

/**
 * Return random userid.
 */

exports.id = function() {
  return uuid.v4();
};

/**
 * Return random stripe id
 */

exports.stripe_id = function() {
  return 'str_' + uuid.v1();
};

/**
 * Return random timestamp.
 */

exports.received_at = function(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return moment(date).format();
};

/**
 * Return random email.
 */

exports.email = function() {
  return faker.internet.email();
};

/**
 * Random name.
 */

exports.name = function() {
  return faker.name.findName();
};

/**
 * Random.
 */

exports.random = function(probability) {
  return probability > Math.random(1)
};

/**
 * Rand num.
 */

exports.randnum = function(num) {
  return Math.floor(Math.random(1) * num) + 1;
};

/**
 * Add random minutes.
 */

exports.addMinutes = function(date, minutes) {
  return moment(moment(date).valueOf() + (Math.floor(Math.random() * minutes) + 1) * 60000).format();
}
