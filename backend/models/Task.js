const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true } // NEW FIELD
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);