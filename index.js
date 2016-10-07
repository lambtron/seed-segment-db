
/**
 * Module dependencies.
 */

var generate_received_at = require('./util').received_at;
var generate_stripe_id = require('./util').stripe_id;
var random_product = require('./products').product;
var addMinutes = require('./util').addMinutes;
var generate_email = require('./util').email;
var generate_name = require('./util').name;
var randnum = require('./util').randnum;
var generate_id = require('./util').id;
var warehouse = require('./warehouse');
var random = require('./util').random;

/**
 * Write to users table.
 * Write to app_opened table
 * Write to product_added table
 * Write to order_completed table
 * Write to stripe.subscriptions table
 * Write to zendesk.users table
 * Write to zendesk.tickets table
 */

/**
 * Generate users.
 */

var users = [];
for (var i = 0; i < 10; i++) {
  users.push(User());
}

/**
 * Turn users into CSV.
 */

var users_csv = 'id,email,name,stripe_customer_id\n';
for (var i = 0; i < users.length; i++) {
  users_csv += users[i].id + ',' + users[i].email + ',' + users[i].name + ',' + users[i].stripe_customer_id + '\n';
}

/**
 * Generate tables.
 */

var app_opened_csv = 'user_id,received_at\n';
var product_added_csv = 'user_id,name,sku,price,received_at\n';
var order_completed_csv = 'user_id,name,sku,price,total,received_at\n';
var start_date = new Date(Date.parse('August 1, 2016'));
for (var i = 0; i < users.length; i++) {
  if (random(0.5)) {
    var app_opened_count = randnum(20);
    for (var j = 0; j < app_opened_count; j++) {
      var app_opened_at = generate_received_at(start_date, new Date(), 0, 24)
      var product_added_at = addMinutes(app_opened_at, 5);
      var order_completed_at = addMinutes(product_added_at, 5);
      app_opened_csv += users[i].id + ',' + app_opened_at + '\n';
      if (random(0.4)) {
        var product = random_product();
        product_added_csv += users[i].id + ',' + product.name + ',' + product.sku + ',' + product.price + ',' + product_added_at + '\n';
        if (random(0.3)) {
          order_completed_csv += users[i].id + ',' + product.name + ',' + product.sku + ',' + product.price + ',' + product.price + ',' + order_completed_at + '\n';
        }
      }
    }
  }
}

/**
 * Write tables.
 */

write('users', users_csv);
write('app_opened', app_opened_csv);
write('product_added', product_added_csv);
write('order_completed', order_completed_csv);
write('zendesk', Zendesk(users));
write('stripe', Stripe(users));

/**
 * Mock `identify` calls.
 */

function User() {
  return {
    id: generate_id(),
    email: generate_email(),
    name: generate_name(),
    stripe_customer_id: generate_stripe_id()
  }
}

/**
 * Stripe
 */

// randomly choose 20% of users
// add them to stripe
// - customer_id (stripe_customer_id)
// - plan_id
//
// OPTIONAL
// - created_at

function Stripe(users) {
  var stripe_csv = 'stripe_customer_id,plan_id\n';
  for (var i = 0; i < users.length; i++) {
    if (random(0.2)) {
      stripe_csv += users[i].stripe_customer_id + ',1\n';
    }
  }
  return stripe_csv;
}

/**
 * Zendesk
 *
 * THIS IS SIMPLIFIED.
 */

// tickets
// - customer_id (user.id)
// - satisfaction rating
// - tags
//
// OPTIONAL
// - created_at
// - status

function Zendesk(users) {
  var zendesk_csv = 'zendesk_customer_id,satisfaction_rating_score,tags\n';
  for (var i = 0; i < users.length; i++) {
    if (random(0.2)) {
      var score = 70 + randnum(30);
      var tags = random(0.5) ? 'app' : 'delivery';
      zendesk_csv += users[i].id + ',' + score + ',' + tags + '\n';
    }
  }
  return zendesk_csv;
}

/**
 * Write all events into a SQL table.
 */

function write(table_name, csv) {


  var cols = csv.split('\n')[0].split(',');
  var rows = csv.split('\n').splice(1);
  rows = rows.splice(0, rows.length - 1);


  console.log(table_name);
  console.log(cols);
  console.log(rows);

  if (rows.length === 0) return;

  warehouse.add(table_name, cols, rows);
}
