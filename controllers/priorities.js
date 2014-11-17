'use strict';

var Priority = require('../models/priority');

exports.index = function(request, reply){
    Priority.find(function(err, priorities){
        reply(priorities);
    });
};