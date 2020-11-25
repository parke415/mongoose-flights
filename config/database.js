var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sei:seirocks123@sei.j44tt.mongodb.net/flights?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB Atlas at ${db.host}:${db.port}`);
});