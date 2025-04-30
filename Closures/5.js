function setupCounter(initialValue) {
    let count = initialValue;
    function increment() {
       count++;
    return count;
     }
    function decrement() {
       count--;
    return count;
     }
    return {
    increment: increment,
    decrement: decrement
     };
    }
    const counterOne = setupCounter(5);
    console.log(counterOne.increment());
    console.log(counterOne.increment());
    const counterTwo = setupCounter(10);
    console.log(counterTwo.decrement());
   console.log(counterOne.decrement());

   //Task 1:
   //A closure is a function that:

//Remembers the variables from its outer (enclosing) function even after that outer function has finished executing.

// Has access to the scope in which it was created, not necessarily the scope in which it is called.

//Task 2:

function createGreeting(greeting) {
    return function(name) {
      return `${greeting}, ${name}!`;
    };
  }
  
  const sayHello = createGreeting("Hello");
  console.log(sayHello("World"));     // Hello, World!
  console.log(sayHello("Alice"));     // Hello, Alice!
  
  const sayHi = createGreeting("Hi");
  console.log(sayHi("Bob"));          // Hi, Bob!

//Task 3 and 4:
function createSecretHolder(secret) {
    let _secret = secret;  // Private variable
  
    return {
      getSecret: function() {
        return _secret;
      },
      setSecret: function(newSecret) {
        _secret = newSecret;
      }
    };
  }
  
  const secretObj = createSecretHolder("myPassword");
  
  console.log(secretObj.getSecret());  // myPassword
  secretObj.setSecret("newSecret123");
  console.log(secretObj.getSecret());  // newSecret123
  
  // Cannot access _secret directly:
  // console.log(secretObj._secret);   // undefined
  
  