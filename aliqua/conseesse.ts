
const functions = require('@google-cloud/functions-framework');

/**
 * Register an error handler for all functions.
 */
functions.onError((err) => {
  // Do something with the error.
});

