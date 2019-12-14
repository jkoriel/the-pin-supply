
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('blog_posts_customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('blog_posts_customers').insert([
        {
          customer_id: 1,
          blog_post_id: 1
        },
        {
          customer_id: 1,
          blog_post_id: 2
        },
        {
          customer_id: 1,
          blog_post_id: 3
        },
        {
          customer_id: 1,
          blog_post_id: 4
        },
        {
          customer_id: 1,
          blog_post_id: 5
        },
        {
          customer_id: 1,
          blog_post_id: 6
        },
        {
          customer_id: 1,
          blog_post_id: 7
        },
        {
          customer_id: 1,
          blog_post_id: 8
        },
        {
          customer_id: 1,
          blog_post_id: 9
        },
        {
          customer_id: 1,
          blog_post_id: 10
        }
      ]);
    });
};
