function Counter() {
    let count = 0;
  
    function increment() {
      count++;
    }
  
    function decrement() {
      count--;
    }
  
    function getCount() {
      return count;
    }
  
    return {
      increment: increment,
      decrement: decrement,
      getCount: getCount
    };
  }
  
  let counter = Counter();
  
  counter.increment();
  counter.increment();
  console.log(counter.getCount()); // Output: 2
  
  counter.decrement();
  console.log(counter.getCount()); // Output: 1
  
  console.log(counter.count); // Output: undefined (count is a private variable)


  /////////////////////////////////////////////////////////////////////////////////

  const createCounter = () => {
   
    let count = 0;
  return ({
      click: () => count += 1,
      getCount: () => count.toLocaleString()
    });
  };

  const counters = createCounter();
  counters.click();
  counters.click();
  counters.click();
  console.log(
    counters.getCount()
  );
  console.log(
    counters.count
  );



  /////////////////////////////////////////////////////////////////////////////////

  // counter.js
let count = 0;

function increment() {
  count++;
}

function getCount() {
  return count;
}

module.exports = {
  increment,
  getCount,
};
