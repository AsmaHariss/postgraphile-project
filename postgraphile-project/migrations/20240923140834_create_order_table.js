exports.up = function(knex) {
    return knex.schema.createTable('orders', function(table) {

      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.string('address').notNullable();
      table.string('total_quantity').notNullable();
      table.decimal('price', 10, 2).notNullable();
      
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('orders');
  };
  