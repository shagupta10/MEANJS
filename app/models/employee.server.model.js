'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Employee Schema
 */
var EmployeeSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Employee name',
		trim: true
	},
	skills:[
		{
			name: String
		}
	],
	yearsExp: {
		type: Number,
		required :true
	},

	billable: {
		type: Boolean,
		required: true
	},

	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	belongsTo:{
		type:Schema.ObjectId,
		ref:'Organization',
		childPath:'members'
	},
	worksFor:[{
		type:Schema.ObjectId,
		ref:'Project',
		childPath:'members'
	}]
});
EmployeeSchema.set('toJSON', {  virtuals: true });

EmployeeSchema.post('init',function(doc){
	//console.log('===> Post --> Init');
	this._original = JSON.parse(JSON.stringify(this));
	console.log(this._original);
	//console.log('    '+this);
});


EmployeeSchema.pre('save',function(next){
	//console.log('===> Pre --> Save');
	//console.log('    '+this);
	next();
});

EmployeeSchema.post('save',function(doc){
	console.log('===> Post --> Save');
	console.log("Before==>");
	console.log('    '+this._original.belongsTo);
	console.log("After==>");
	console.log('    '+this);
});

EmployeeSchema.set

mongoose.model('Employee', EmployeeSchema);
