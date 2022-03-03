var mongoose = require('mongoose');
const Schema = mongoose.Schema
var blogSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'No Name'
    },
});

module.exports = mongoose.model('blog1', blogSchema);