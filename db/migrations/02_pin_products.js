exports.up = function (knex) {
  return knex.schema.createTable("pin_products", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("price").notNullable();
    table.string("description").notNullable();
    table.string("picture").notNullable()
  });
};

exports.down = function (knex, Promise) { };
