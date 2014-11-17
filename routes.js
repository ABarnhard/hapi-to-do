'use strict';

var Joi        = require('joi'),
    home       = require('./contollers/home'),
    tasks      = require('./controllers/tasks'),
    priorities = require('./controllers/priorities');

module.exports = function(server){
    var routes = [{
        method: 'GET',
        path: '/',
        handler: home.index
    }];

    routes.forEach(function(route){
        server.route(route);
    });
};