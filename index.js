'use strict';

var port    = process.env.PORT,
    db      = process.env.DB,
    Hapi    = require('hapi'),
    server  = new Hapi.Server(port),
    Joi     = require('joi');
