
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pin_products').del()
    .then(function () {
      // Inserts seed entries
      return knex('pin_products').insert([
        {
          name: "Beloved Tales Zootopia DSSH Pin",
          price: "$89.99",
          description: "Part of the Beloved Tales collection, this is a LE 300 pin that belongs in every collection.",
          picture: "https://thumbs.worthpoint.com/zoom/images2/1/0717/17/dsf-dssh-beloved-tales-pin-set_1_0be4a7dc08dba6e1219fb93cf6770fa4.jpg"
        },
        {
          name: "Beloved Tales Incredibles DSSH Pin",
          price: "$109.99",
          description: "Part of the Beloved Tales collection, this is a LE 300 pin that belongs in every collection.",
          picture: "https://www.disneypinsblog.com/wp-content/uploads/2015/01/The-Incredibles-Beloved-Tales-Pin.png"
        },
        {
          name: "Beloved Tales Zootopia DSSH Pin",
          price: "$89.99",
          description: "Part of the Beloved Tales collection, this is a LE 300 pin that belongs in every collection.",
          picture: "https://thumbs.worthpoint.com/zoom/images2/1/0717/17/dsf-dssh-beloved-tales-pin-set_1_0be4a7dc08dba6e1219fb93cf6770fa4.jpg"
        },
        {
          name: "Beloved Tales Zootopia DSSH Pin",
          price: "$89.99",
          description: "Part of the Beloved Tales collection, this is a LE 300 pin that belongs in every collection.",
          picture: "https://thumbs.worthpoint.com/zoom/images2/1/0717/17/dsf-dssh-beloved-tales-pin-set_1_0be4a7dc08dba6e1219fb93cf6770fa4.jpg"
        }

      ]);
    });
};
