const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");

const helpers = require("./utils/helpers");

const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
    secret: 'Secret'
    cookie: { orginalMaxAge: 600000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};


