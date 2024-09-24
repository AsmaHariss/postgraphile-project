exports.up = function(knex) {
    return knex.schema.createTable('foods', function(table) {
      table.increments('id').primary();
      table.string('food_name').notNullable();
      table.string('description').notNullable();
      table.integer('quantity').notNullable();
      table.decimal('price', 10, 2).notNullable();
      
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('foods');
  };
  