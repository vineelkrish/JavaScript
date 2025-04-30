function flexibleFunction(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
    }
    flexibleFunction(1);
    flexibleFunction(1, 2);
    flexibleFunction(1, 2, 3, 4, 5);
    // Expected output:
    // a: 1
    // b: undefined
    // rest: []
    // a: 1
    // b: 2
    // rest: []
    // a: 1
    // b: 2
    // rest: [3, 4, 5]
    // The rest parameter `...rest` collects all remaining arguments into an array.
    // It allows you to handle a variable number of arguments in a function.

    //TASK 3:
    function sumAll(...numbers) {
        let sum = 0;
        for (let num of numbers) {
          sum += num;
        }
        return sum;
      }
      
      console.log(sumAll(1, 2, 3));        // 6
      console.log(sumAll(10, 20, 30, 40)); // 100
      console.log(sumAll());              // 0

      
      //TASK 4:
      function processArguments(primaryFunction, ...args) {
        return primaryFunction(...args);  // Spread the args into the function
      }
      
      // Example primary function:
      function multiply(x, y) {
        return x * y;
      }
      
      
      console.log(processArguments(multiply, 3, 4)); // 12
      
      