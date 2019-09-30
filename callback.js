console.log("DeltaSchool");
setTimeout(callback,5000);
console.log("DeltaSchool");
setTimeout(callback,5000);
console.log("DeltaSchool");
setTimeout(callback,5000);

function callback(){
    console.log("queried the database and delivered in 5 seconds");
}


//another example on callback

const userleft=true;
const userwatching=true;

function watchcallback(callback,errorcallback){
    if(userleft){
        errorcallback({
            name:'user left',
            message:':('
        })
    }else  if(userwatching){
        errorcallback({
            name:'user watching',
            message:'webdev simplified < cat'
        })
    }else{
        callback('thumbs up and subscribe');
    }
}

watchcallback((message)=>{
    console.log('success '+message);
},(error)=>{
    console.log(error.name +''+error.message);
})

