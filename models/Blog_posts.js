const { Model } = require("objection");

class Blog_posts extends Model {
    static get tableName() {
        return "blog_posts";
    }

    static get relationMappings() {
        const Customer = require("./Customer");
        return {
            customers: {
                relation: Model.ManyToManyRelation,
                modelClass: Customer,
                join: {
                    from: "blog_posts.id",
                    through: {
                        // users_tee_times is the join table.
                        from: "blog_posts_customers.blog_post_id",
                        to: "blog_posts_customers.customer_id"
                    },
                    to: "customers.id"
                }
            }
        };
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: [
                "title",
                "body"
            ],

            properties: {
                id: { type: "integer" },
                title: { type: "string", minLength: 1, maxLength: 255 },
                body: { type: "string", minLength: 1, maxLength: 255 },
            }
        };
    }
}

module.exports = Blog_posts
