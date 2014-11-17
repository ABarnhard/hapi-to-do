'use strict';

var Task = require('../models/task');

exports.index = function(request, reply){
    Task.find().populate('priority').exec(function(err, tasks){
        reply(tasks);
    });
};

exports.new = function(request, reply){
    var t = new Task(request.payload);
    t.save(function(){
        reply(t);
    });
};