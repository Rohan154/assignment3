var async=require("async");

async.waterfall([
  function firstStep(callback) {
    console.log('start!');

    callback(null, 'Rohan'); //  set value to passed to step 2
  },
  function secondStep(step1Result, callback) {
    console.log(step1Result);

    callback(null, 'Kumar'); //  set value to passed to step 3
  },
  function thirdStep (step2Result, callback) {
    console.log(step2Result);

    callback(null); //  no value set for the next step.
  }
],
function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('No error happened in any steps, operation done!');
  }
});