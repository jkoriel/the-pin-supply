exports.up = function (knex) {
    return knex.schema.createTable("blog_posts", function (table) {
        table.increments();
        table.string("title").notNullable();
        table.string("body").notNullable();
    });
};

exports.down = function (knex, Promise) { };
