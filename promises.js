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
            message:'enjoy it'
        })
    }else{
        callback('thanks for watching movie in our cinemahall');
    }
}

watchcallback((message)=>{
    console.log('success by using callback :'+message);
},(error)=>{
    console.log('error by using callback: '+error.name +''+error.message);
})




//promise

function watchPromise(){
    return new Promise((resolve,reject)=>{
        if(userleft){
            reject({
                name:'user left',
                message:':('
            })
        }else  if(userwatching){
            reject({
                name:'user watching',
                message:'enjoy watching movie'
            })
        }else{
            resolve('thanks for watching movie in our cinemahall');
        }
    })
}

watchPromise().then((message)=>{
    console.log('success by using promise :'+message);
}).catch((error)=>{
    console.log('error by using promise: '+error.name +''+error.message);
})


// //promise.all() example 



const a=new Promise((resolve,reject)=>{
    resolve('first promise');
})
const b=new Promise((resolve,reject)=>{
    resolve('second promise');
})
const c=new Promise((resolve,reject)=>{
    resolve('third promise');
})





//promise.all() method returns all resolve in an array
Promise.all([
    a,
    b,
    c
]).then((messages)=>{
    console.log(messages)
})




//if i want that if the first callback gets completed and should not wait for the rest one so for that we have to use promise.race() which it will display the 
// first callback as soon as the task gets completed
Promise.race([
    a,
    b,
    c
]).then((message)=>{
    console.log(message)
})






