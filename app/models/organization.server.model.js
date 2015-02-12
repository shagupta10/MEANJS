'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Organization Schema
 */
var OrganizationSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Organization name',
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
	owner:{
		type:Schema.ObjectId,
		ref:'Employee'
	},
	projects:[
		{
			type:Schema.ObjectId,
			ref:'Project'
		}
	],
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Organization', OrganizationSchema);
