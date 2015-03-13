'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
    firstName: {
        type: String,
        default: '',
        required: 'Please fill Customer name',
        trim: true
    },
    lastName: {
        type: String,
        default: '',
        required: 'Please fill Customer last name',
        trim: true
    },
    suburb: {
        type: String,
        default: '',
        trim: true
    },
    country: {
        type: String,
        default: '',
        trim: true
    },
    industry: {
        type: String,
        default: '',
        trim: true
    },
    email: {
        type: String,
        default: '',
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        default: '',
        trim: true
    },
    refered: {
        type: Boolean
    },
    channel: {
        type: String,
        default: '',
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Customer', CustomerSchema);
