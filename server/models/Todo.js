// server/models/Todo.js
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true, // Bắt buộc phải có
  },
  completed: {
    type: Boolean,
    default: false, // Mặc định là chưa hoàn thành
  },
  createdAt: {
    type: Date,
    default: Date.now, // Tự động lấy thời gian hiện tại khi tạo
  },
});

module.exports = mongoose.model('Todo', TodoSchema);