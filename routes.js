'use strict';

var Joi        = require('joi'),
    home       = require('./controllers/home'),
    tasks      = require('./controllers/tasks'),
    priorities = require('./controllers/priorities');

module.exports = function(server){
    var routes = [
        {
            method: 'GET',
            path: '/',
            handler: home.index
        },
        {
            method: 'GET',
            path: '/about',
            handler: home.about
        },
        {
            method: 'GET',
            path: '/priorities',
            handler: priorities.index
        },
        {
            method: 'POST',
            path: '/priorities',
            handler: priorities.new,
            config: {
                validate: {
                    payload: {
                        level: Joi.number().required().min(0),
                        name: Joi.string().required().min(3),
                        color: Joi.string().required()
                    }
                }
            }
        }
    ];

    routes.forEach(function(route){
        server.route(route);
    });
};