//generators



// function *process(){
//     yield 8000;   //yield means stop i.e wherever we use yield it will stop automatically after yield has done his work
//     yield 8001;
// }

// let it=process();   //after creating yield we have to make variable to store it.
// console.log(it.next());


// function *process(){
//     yield 8000;   //yield means stop i.e wherever we use yield it will stop automatically after yield has done his work
//     yield 8001;
// }

// let it=process();   //after creating yield we have to make variable to store it.
// it.next();       //it will iterate the function 
// it.next();
// console.log(it.next()); 


//using yield inside a variable

// function *process(){
//     let result=yield;
//     console.log(`result is:${result}`);
// }
// let it=process();
// it.next();      //this it.next() will help the generators to get started
// it.next(200);


//using yield in an array : yield can also be used in array



function *process(){
    let newArray=[yield,yield,yield];
    console.log(newArray[2]);
}
let it=process();
it.next();      //this it.next() will help the generators to get started
it.next(20);
it.next(200);
it.next(2000);