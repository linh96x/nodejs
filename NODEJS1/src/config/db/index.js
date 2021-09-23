const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/f8', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Kết nối db thành công');
  } catch (error) {
    console.log('Kết nối db thất bai');
  }
}
module.exports = { connect };
