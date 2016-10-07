
/**
 * Module dependencies.
 */

module.exports = [
  {
    table_name: 'users',
    headers: [
      {
        name: 'id',
        datatype: 'text'
      }, {
        name: 'email',
        datatype: 'text'
      }, {
        name: 'name',
        datatype: 'text'
      }, {
        name: 'stripe_customer_id',
        datatype: 'text'
      }
    ]
  }, {
    table_name: 'app_opened',
    headers: [
      {
        name: 'user_id',
        datatype: 'text'
      }, {
        name: 'received_at',
        datatype: 'timestamp with time zone'
      }
    ]
  }, {
    table_name: 'product_added',
    headers: [
      {
        name: 'user_id',
        datatype: 'text'
      }, {
        name: 'received_at',
        datatype: 'timestamp with time zone'
      }, {
        name: 'name',
        datatype: 'text'
      }, {
        name: 'sku',
        datatype: 'text'
      }, {
        name: 'price',
        datatype: 'integer'
      }
    ]
  }, {
    table_name: 'order_completed',
    headers: [
      {
        name: 'user_id',
        datatype: 'text'
      }, {
        name: 'received_at',
        datatype: 'timestamp with time zone'
      }, {
        name: 'name',
        datatype: 'text'
      }, {
        name: 'sku',
        datatype: 'text'
      }, {
        name: 'price',
        datatype: 'integer'
      }, {
        name: 'total',
        datatype: 'integer'
      }
    ]
  }, {
    table_name: 'stripe',
    headers: [
      {
        name: 'stripe_customer_id',
        datatype: 'text'
      }, {
        name: 'plan_id',
        datatype: 'text'
      }
    ]
  }, {
    table_name: 'zendesk',
    headers: [
      {
        name: 'zendesk_customer_id',
        datatype: 'text'
      }, {
        name: 'satisfaction_rating_score',
        datatype: 'integer'
      }, {
        name: 'tags',
        datatype: 'text'
      }
    ]
  }
];
