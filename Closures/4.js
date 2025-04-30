const user = {
    name: "Alice",
    greetDelayed: function() {
    setTimeout(function() {
        console.log(`Hello, ${this.name}!`);
    }, 1000);
     }
    };
   user.greetDelayed(); 
// The output will be "Hello, undefined!" because the `this` inside the `setTimeout` function does not refer to the `user` object. To fix this, you can use an arrow function or bind `this` to the function.

const user1 = {
    name: "Alice",
    greetDelayed: function() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};
user1.greetDelayed();
// The output will be "Hello, Alice!" because arrow functions do not have their own `this` context; they lexically bind `this` from the surrounding context, which is the `user` object in this case.

const userCorrectedTraditional = {
    name: "Alice",
    greetDelayed: function() {
    const self = this; // Store a reference to 'this'
    setTimeout(function() {
    console.log(`Hello, ${self.name}!`);
       }, 
   1000);
     }
    };
    userCorrectedTraditional.greetDelayed(); 
    // The output will be "Hello, Alice!" because we store a reference to `this` in `self`, which is accessible inside the `setTimeout` function.
// This is a common pattern used to work around the issue of `this` in traditional function expressions.

