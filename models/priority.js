'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var PrioritySchema = new Schema({
    level: Number,
    name: String,
    color: String
});

function createPriority(){
    return Priority.mongoose.model('Priority', PrioritySchema);
}

function Priority(){}

Object.defineProperty(Priority, 'mongoose', {
    get: function(){return global.mongoose;}
});

module.exports = createPriority;