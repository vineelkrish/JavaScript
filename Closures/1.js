function createCounter() {
    let count = 0;  // This is a private variable inside createCounter
  
    function incrementCounter() {
      count++;           // This inner function modifies count
      return count;
    }
  
    return incrementCounter;  // Return the inner function
  }

  const counterA = createCounter();
  console.log(counterA()); // Expected: 1
  console.log(counterA()); // Expected: 2
  
  const counterB = createCounter();
  console.log(counterB()); // Expected: 1
  //counterA and counterB are independent because each has its own closure over a separate count.
  // console.log(count); //  Error
// count = 10;         //  Error
