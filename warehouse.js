
/**
 * Module dependencies.
 */

var pg = require('pg');
var Pool = require('pg').Pool;

/**
 * Instantiate pool.
 */

var pool = new Pool({
  user: 'andyjiang',
  password: 'admin',
  host: 'localhost',
  database: 'segmentlooker',
  max: 20, // max number of clients in pool
  idleTimeoutMillis: 1000, // close & remove clients which have been idle > 1 second
});

/**
 * Create a table.
 *
 * - name
 * - columns
 *    - name: colname
 *    - datatype: datatype
 */

exports.create = function create(name, columns) {
  var q = 'CREATE TABLE ' + name + ' (';
  for (var i = 0; i < columns.length; i++) {
    q += columns[i].name + ' ' + columns[i].datatype;
    if (i < columns.length - 1) q += ', ';
  }
  q += ');';

  console.log(q);

  pool.query(q, function(err, res) {
    if (err) throw err;
    console.log(res);

    pool.end(function(err) {
      if (err) throw err;
    });
  });
};

/**
 * Add rows to a table.
 */

exports.add = function add(name, columns, rows) {
  var q = 'INSERT INTO ' + name + ' (';
  for (var i = 0; i < columns.length; i++) {
    q += columns[i];
    if (i < columns.length - 1) q += ', ';
  }
  q += ') VALUES ';

  for (var j = 0; j < rows.length; j++) {
    var items = rows[j].split(',');
    q += '(';
    for (var k = 0; k < items.length; k++) {
      items[k] = parseFloatSafely(items[k]);
      if (typeof items[k] === 'number') q += items[k];
      else q += '\'' + items[k] + '\'';
      if (k < items.length - 1) q += ', ';
    }
    if (j < rows.length - 1) q += '),';
  }
  q += ');';

  console.log(q);

  pool.query(q, function(err, res) {
    if (err) throw err;
    console.log(res);

    pool.end(function(err) {
      if (err) throw err;
    });
  });
};

/**
 * is float?
 */

function parseFloatSafely(n){
  var f = parseFloat(n);
  if (Number(f) === f && f % 1 !== 0) return f;
  return n;
}
