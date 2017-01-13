import request from 'request-promise';
import retry from 'retryer';


request('http://site.com/')
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('error'))
