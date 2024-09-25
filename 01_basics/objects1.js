const mysymbol = Symbol("key1");
const jsUser = {
    name : "aman singh" ,
    age : "21",
    [mysymbol] : "myKeyValue" ,
    gmail : "aman@321",
}

//console.log(jsUser);
//console.log(jsUser[mysymbol]);

/*         freeze in object  : unable to change the value of te key */

jsUser.gmail = "aman@1212";
 //Object.freeze(jsUser)

//jsUser.gmail = "aman@12";
//console.log(jsUser);

/******* function in objects  ******************/

jsUser.greeting = function(){
    console.log("hi user");
}

console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`hi user,${this.name}`);
}
console.log(jsUser.greeting2());