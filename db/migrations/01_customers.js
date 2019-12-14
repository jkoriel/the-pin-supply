exports.up = function (knex) {
  return knex.schema.createTable("customers", function (table) {
    table.increments();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable();
    table.string("address").notNullable();
    table.string("phone").notNullable();
    table.string("username").notNullable();
    table.string("password");
    table.timestamp("updated_at").notNullable();
    table.timestamp("created_at").notNullable();
  });
};

exports.down = function (knex, Promise) { };
