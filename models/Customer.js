const { Model } = require("objection");

class Customer extends Model {
  static get tableName() {
    return "customers";
  }

  static get relationMappings() {
    const Blog_posts = require("./Blog_posts");

    return {
      blog_posts: {
        relation: Model.ManyToManyRelation,
        modelClass: Blog_posts,
        join: {
          from: "customers.id",
          through: {
            from: "blog_posts_customers.customer_id",
            to: "blog_posts_customers.blog_post_id"
          },
          to: "blog_posts.id"
        }
      }
    };
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "first_name",
        "last_name",
        "email",
        "address",
        "phone",
        "username",
        "password",
        "updated_at",
        "created_at"
      ],

      properties: {
        id: { type: "integer" },
        first_name: { type: "string", minLength: 1, maxLength: 255 },
        last_name: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 },
        address: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "string", minLength: 1, maxLength: 255 },
        username: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string", minLength: 1, maxLength: 255 },
        created_at: { type: "string", minLength: 1, maxLength: 255 },
        updated_at: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}

module.exports = Customer;
