const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }],

  title: { type: String, required: true },
  link: { type: String, required: true },
  shortDesc: { type: String, required: true },
  img: { type: String, required: true },
});

module.exports = mongoose.model('Article', ArticleSchema);
