const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling missing here!  Express doesn't automatically handle these.
    console.error('Error:', error);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  // Simulates an asynchronous operation that sometimes fails
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve({ message: 'Success!' });
    } else {
      reject(new Error('Something went wrong!') );
    }
  });
}