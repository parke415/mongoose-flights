var mongoose = require('mongoose');

// mongodb+srv://sei:seirocks123@sei.j44tt.mongodb.net/flights?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});