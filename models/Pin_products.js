const { Model } = require("objection");

class Pin_products extends Model {
    static get tableName() {
        return "pin_products";
    }

    //   static get relationMappings() {
    //     const Tee_time = require("./Tee_time");

    //     return {
    //       tee_times: {
    //         relation: Model.ManyToManyRelation,
    //         modelClass: Tee_time,
    //         join: {
    //           from: "customers.id",
    //           through: {
    //             // customers_tee_times is the join table.
    //             from: "tee_times_customers.customer_id",
    //             to: "tee_times_customers.tee_time_id"
    //           },
    //           to: "tee_times.id"
    //         }
    //       }
    //     };

    static get jsonSchema() {
        return {
            type: "object",
            required: [
                "name",
                "price",
                "description",
                "picture"
            ],

            properties: {
                id: { type: "integer" },
                name: { type: "string", minLength: 1, maxLength: 255 },
                description: { type: "string", minLength: 1, maxLength: 255 },
                picture: { type: "string", minLength: 1, maxLength: 255 }
            }
        };
    }
}

module.exports = Pin_products