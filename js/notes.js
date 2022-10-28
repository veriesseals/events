/**
 * ES6 JavaScript
 * 
 * var becomes let and const
 * 
 * var and let can change and const can not
 */

 let foo = 'hello';

 console.log(foo);
 
 foo = 'goodbye';
 
 console.log(foo);
 
 // is fine cont can not do this. It must be defined.
 let foo2;
 
 var foo3;
 
 // const foo4; // wont work
 
 const foo4 = "Hello";
 
 /**
  * Functions
  * 
  * Declaritive Function
  * 
  * function functionName() {
  *  do stuff
  * }
  * 
  * Arrow function 
  * 
  * const funcName = () => {
  *      do stuff
  * }
  * 
  */
 
 // Doesnt need {} the return with one code with one line
 const foo5 = () => console.log('Say Hello');
 
 foo5();
 
 // more than one line use {}
 const foo6 = () => {
     let count = 6;
     console.log(count);
 }
 
 foo6();
 
 /**
  * Regular if 
  * 
  * if (condition) {
  *      do stuff
  * } else {
  *      do something else
  * }
  * Ternaries:
  * 
  *      another way to write if statments
  * 
  * condition ? do stuff : do something else
  * 
  */
 
 
 
 let baz2 = 8;
 
 if (baz2 == 8) {
     console.log(baz2);
 }else {
     console.log('This is not right');
 }
 
 let baz = 10;
 
 baz == 8 ? console.log(baz) : console.log('This is not right');
 
 // baz == 8 ? console.log(baz) : null;
 
 console.clear();