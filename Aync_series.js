var async=require('async');
// console.log(async);
async.series([
    function (callback){
        console.log('first callback');
        callback(null,1);
    },
    function (callback){
        console.log('second callback');
        callback(null,2);
    },
    function (callback){
        console.log('third callback');
        callback(null,3);
    }
],
function(err,result){
    console.log(result);
});