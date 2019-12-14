
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('blog_posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('blog_posts').insert([
        {
          title: "Some Blog Post Title Here",
          body: "Ut sint ex eu ea nisi voluptate. Occaecat Lorem aliqua officia commodo quis deserunt quis."
        },
        {
          title: "Some Blog Post Title Here",
          body: "In do consequat velit cillum et deserunt nisi eu. Sint tempor quis."
        },
        {
          title: "Some Blog Post Title Here",
          body: "Irure veniam culpa magna mollit ea proident ullamco irure labore."
        },
        {
          title: "Some Blog Post Title Here",
          body: "Sint minim ipsum aliquip aute tempor enim occaecat adipisicing aute ipsum consectetur. Ut est ex laboris aliqua amet. Aliquip est exercitation qui non anim nisi."
        },
        {
          title: "Some Blog Post Title Here",
          body: "Aliquip non eiusmod do dolor sit nisi laboris est eiusmod duis laboris."
        },
        {
          title: "Some Blog Post Title Here",
          body: "Irure laborum minim ipsum ea veniam et sint mollit excepteur ex. Occaecat tempor eu et occaecat incididunt elit velit ad do elit. Voluptate ipsum commodo mollit cupidatat voluptate. Exercitation esse."
        },
        {
          title: "Some Blog Post Title Here",
          body: "Elit minim tempor nisi ex excepteur veniam minim qui veniam velit magna. Cillum proident qui non cupidatat minim tempor proident aute nisi ipsum proident ipsum."
        },
        {
          title: "Some Blog Post Title Here",
          body: "Laborum irure officia reprehenderit sint pariatur consequat anim. Eu dolor aliquip aliquip deserunt deserunt ad laboris sint nostrud sit duis ad ex. Veniam incididunt"
        },
        {
          title: "Some Blog Post Title Here",
          body: "Culpa do anim ad et adipisicing est. Est ullamco deserunt incididunt irure duis sit occaecat minim tempor minim. Eiusmod ipsum ex aute sunt esse tempor fugiat ullamco."
        },
        {
          title: "Some Blog Post Title Here",
          body: "Culpa magna veniam aliquip cupidatat deserunt dolore reprehenderit nostrud id aliquip. Reprehenderit incididunt non aute proident amet est aliquip deserunt aute. Aliquip"
        }
      ]);
    });
};
