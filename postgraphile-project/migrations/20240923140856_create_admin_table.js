exports.up = function(knex) {
    return knex.schema.createTable('admin', function(table) {
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('lats_name').notNullable();
      table.string('phone').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('admin');
  };
  