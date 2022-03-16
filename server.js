// Loading the express module on our server
const express = require("express");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

// Creates a new instance of express
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);

let session = require("express-session");
let passport = require("./helper/ppConfig");

app.use(
  session({
    secret: process.env.secret,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 340000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function (req, res, next) {
  console.log(req.user);
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();
  next();
});
app.use(methodOverride("_method"));
// Import Routes
const indexRoute = require("./routes/index");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const savedRoutes = require("./routes/saved");
// const apiRoutes = require("./routes/api");

// Mount Routes
app.use("/", indexRoute);
app.use("/", authRoutes);
app.use("/", profileRoutes);
app.use("/", savedRoutes);
// app.use("/", apiRoutes);
app.set("view engine", "ejs");

// Connection with mongoDB
mongoose.connect(
  process.env.mongoDBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("MongoDB connected successfully!");
  }
);

app.listen(port, () =>
  console.log(`Music and memories is running on port ${port}`)
);
