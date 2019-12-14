// const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const { Model } = require("objection");
const logger = require("morgan");
const knex = require("./db/knex");
// const passport = require("passport"),
//   LocalStrategy = require("passport-local").Strategy;

const customers = require("./routes/customerRoutes");
const blog_posts = require("./routes/blogRoutes")
const pin_products = require("./routes/pinRoutes")

Model.knex(knex);

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/customers", customers);
app.use("/blog_posts", blog_posts);
app.use("/pins", pin_products)


// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//       session: false
//     },
//     (email, password, done) => {
//       knex("customers")
//         .where({ email })
//         .first()
//         .then(customer => {
//           if (!customer) return done(null, false);
//           if (password === customer.password) {
//             return done(null, customer);
//           } else {
//             return done(null, false);
//           }
//         })
//         .catch(err => {
//           return done(err);
//         });
//     }
//   )
// );

// passport.serializeUser((customer, done) => {
//   done(null, customer.id);
// });

// passport.deserializeUser((id, done) => {
//   return knex("customers")
//     .where({ id })
//     .first()
//     .then(customer => {
//       done(null, customer);
//     })
//     .catch(err => {
//       done(err, null);
//     });
// });

// app.use(passport.initialize());

// app.get("/login", function(req, res) {
//   res.render("login");
// });

// app.post(
//   "/login",
//   passport.authenticate("local", { failureRedirect: "/login" }),
//   function(req, res) {
//     res.redirect("/customers");
//   }
// );
module.exports = { app };
