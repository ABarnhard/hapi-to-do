'use strict';

var Priority = require('../models/priority');

exports.index = function(request, reply){
    Priority.all(function(err, priorities){
        reply(priorities);
    });
};