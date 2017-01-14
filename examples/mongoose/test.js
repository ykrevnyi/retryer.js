
mongoose.connect('mongodb://mongodb/test-db');
mongoose.connection.on('error', console.log('error'));
mongoose.connection.once('open', function() {
  console.log('Connected 🎉');
});
