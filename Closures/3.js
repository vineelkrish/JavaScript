console.log(mysteryVariable);
mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
console.log("Inside revealMystery:", mysteryVariable);
var mysteryVariable = 20;
console.log("Inside revealMystery (after declaration):", mysteryVariable);
}
revealMystery();
console.log("After revealMystery:", mysteryVariable);
// Output:
// undefined
// 10
// Inside revealMystery: undefined
// Inside revealMystery (after declaration): 20
// After revealMystery: 10



// Using let instead of var
console.log(mysteryVariable); // ReferenceError: Cannot access 'mysteryVariable' before initialization
let mysteryVariable = 10;
console.log(mysteryVariable); // 10
function revealMystery() {
    console.log("Inside revealMystery:", mysteryVariable); // ReferenceError: Cannot access 'mysteryVariable' before initialization
    let mysteryVariable = 20;
    console.log("Inside revealMystery (after declaration):", mysteryVariable); // This line won't execute due to the error above
}
revealMystery();
console.log("After revealMystery:", mysteryVariable); // This line won't execute due to the error above
// Output:

// ReferenceError: Cannot access 'mysteryVariable' before initialization

//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase, before the code is executed. However, the behavior differs for var, let, and const. Variables declared with var are hoisted and initialized with undefined, meaning they can be accessed before their declaration without throwing an error (though this often leads to bugs). In contrast, let and const are also hoisted but are not initialized; they remain in a "temporal dead zone" from the start of the block until their declaration is encountered. Accessing them before their declaration results in a ReferenceError. Additionally, const requires an immediate initialization at the time of declaration, unlike let and var.
