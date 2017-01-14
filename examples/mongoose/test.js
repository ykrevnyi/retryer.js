mongoose.Promise = Promise;

function mongooseConnect() {
  return mongoose.connect('mongodb://mongodb/test-db');
}
mongoose.connection.on('error', console.log('error'));
mongoose.connection.once('open', function() {
  console.log('Connected 🎉');
});

retry(mongooseConnect)
  .then(data => console.log('Connected 🎉'))
  .catch(err => console.log('error'););
