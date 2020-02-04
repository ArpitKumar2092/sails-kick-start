/**
 * Video.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name:{
      type:'string'
    },
    visibility:{
      type:'enum',
      enum: ['private', 'public'],
      defaultTo: 'private'
    },
    tags:{
      type:'array'
    },
    views:{
      type:'integer'
    },
    description:{
      type:'string'
    },
    status :{
      type:'enum',
      enum: ['published', 'blocked','deleted'],
      defaultTo:'published'
    },
    uploadedBy:{
      model:'user',
    },
    category :{
      model: 'category'
    },
  }
};

