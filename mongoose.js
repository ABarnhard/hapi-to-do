'use strict';
var db = process.env.DB;

var mongoose = require('mongoose');
mongoose.connect(db);