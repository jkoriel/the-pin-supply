exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("customers").insert([
        {
          first_name: "Jacob",
          last_name: "Koriel",
          email: "jkoriel96@gmail.com",
          address: "12215 W Briles Rd Peoria, AZ 85383",
          phone: "+1 (623) 512-6295",
          username: "jkorieladmin",
          password: "pinsupply123",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        },
        {
          first_name: "Shepard",
          last_name: " Blevins",
          email: "shepardblevins@shopabout.com",
          address: "132 Boardwalk , Lopezo, Alaska, 9562",
          phone: "+1 (865) 533-2884",
          username: "pariatur",
          password: "amet",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        },
        {
          first_name: "Noelle",
          last_name: " Whitney",
          email: "noellewhitney@shopabout.com",
          address: "793 Wyona Street, Norris, Kansas, 3211",
          phone: "+1 (906) 515-2567",
          username: "consequat",
          password: "mollit",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        },
        {
          first_name: "Fitzgerald",
          last_name: " Hogan",
          email: "fitzgeraldhogan@shopabout.com",
          address: "694 Woodhull Street, Tonopah, Louisiana, 6379",
          phone: "+1 (821) 449-3808",
          username: "laborum",
          password: "ullamco",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        },
        {
          first_name: "Weeks",
          last_name: " Glover",
          email: "weeksglover@shopabout.com",
          address: "137 Stryker Street, Saddlebrooke, Hawaii, 2377",
          phone: "+1 (938) 568-2921",
          username: "pariatur",
          password: "ipsum",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        },
        {
          first_name: "Helen",
          last_name: " Pate",
          email: "helenpate@shopabout.com",
          address: "372 Troutman Street, Venice, North Dakota, 7003",
          phone: "+1 (838) 400-2995",
          username: "consequat",
          password: "deserunt",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        },
        {
          first_name: "Richmond",
          last_name: " Hewitt",
          email: "richmondhewitt@shopabout.com",
          address: "339 Eastern Parkway, Kapowsin, Guam, 9601",
          phone: "+1 (911) 424-2650",
          username: "mollit",
          password: "adipisicing",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        },
        {
          first_name: "Fuentes",
          last_name: " Carpenter",
          email: "fuentescarpenter@shopabout.com",
          address: "694 Williams Court, Comptche, Colorado, 5797",
          phone: "+1 (879) 565-3438",
          username: "velit",
          password: "amet",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        },
        {
          first_name: "Tonia",
          last_name: " Doyle",
          email: "toniadoyle@shopabout.com",
          address: "623 Blake Avenue, Foxworth, Wyoming, 2894",
          phone: "+1 (920) 528-3932",
          username: "veniam",
          password: "aliquip",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        },
        {
          first_name: "Nixon",
          last_name: " Keller",
          email: "nixonkeller@shopabout.com",
          address: "505 Lincoln Place, Moscow, North Carolina, 9414",
          phone: "+1 (977) 403-3861",
          username: "tempor",
          password: "tempor",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        },
        {
          first_name: "Ines",
          last_name: " Mays",
          email: "inesmays@shopabout.com",
          address: "293 Robert Street, Iola, Vermont, 7982",
          phone: "+1 (824) 457-2803",
          username: "dolor",
          password: "ullamco",
          created_at: "2017-05-22T02:53:41 +07:00",
          updated_at: "2016-01-15T08:36:33 +07:00"
        }
      ]);
    });
};
