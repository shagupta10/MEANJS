'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	relationship = require('mongoose-relationship');

/**
 * Project Schema
 */
var ProjectSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Project name',
		trim: true
	},
	numOfPeople:{
		type: Number,
		required: false
	},
	billableHeadCount:{
		type: Number,
		required: false

	},
	benchCount:{
		type: Number,
		required: false

	},
	belongsTo:{
		type:Schema.ObjectId,
		ref:'Organization',
		childPath:'projects'
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
ProjectSchema.plugin(relationship, { relationshipPathName:'belongsTo' });
mongoose.model('Project', ProjectSchema);
