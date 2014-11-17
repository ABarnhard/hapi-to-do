'use strict';

var Task = require('../models/task');

exports.index = function(request, reply){
    Task.all(function(err, tasks){
        reply(tasks);
    });
};