var async=require('async');

//using async with objects
var stack={};

stack. getUsername=function(callback){
var username='rohan';
callback(null,username);
}

stack. getAge=function(callback){
var age=21;
callback(null,age);
}

stack. getGender=function(callback){
var gender='male';
callback(null,gender);
}

async.parallel(stack,function(err,results){
    if(err){
        console.log(err);
        return;
    }
    console.log(results);
})