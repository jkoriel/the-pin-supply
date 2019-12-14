exports.up = function (knex) {
    return knex.schema.createTable("blog_posts_customers", function (table) {
        table.increments();
        table
            .integer("customer_id")
            .references("id")
            .inTable("customers")
            .onDelete("CASCADE");
        table
            .integer("blog_post_id")
            .references("id")
            .inTable("blog_posts")
            .onDelete("CASCADE");
    });
};

exports.down = function (knex, Promise) { };
