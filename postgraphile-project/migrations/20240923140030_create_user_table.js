exports.up = function(knex) {
  return knex.schema.hasTable('users').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable(); 
        table.string('address').notNullable();
        table.string('phone').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
