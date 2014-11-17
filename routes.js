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
        },
        {
            method: 'POST',
            path: '/tasks',
            handler: tasks.new,
            config: {
                validate: {
                    payload: {
                        name: Joi.string().required().min(3),
                        due: Joi.date().required().min('now').format('YYYY/MM/DD'),
                        priority: Joi.string().required().min(24)
                    }
                }
            }
        },
        {
            method: 'GET',
            path: '/tasks',
            handler: tasks.index
        }
    ];

    routes.forEach(function(route){
        server.route(route);
    });
};