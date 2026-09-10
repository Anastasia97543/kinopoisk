const intervalId = setInterval(() => {
  console.log("setInterval");
}, 10);

setTimeout(() => {
  //  в стек  микро 1.'then 4',,setTimeout 2, далее then 1', 'then 2', the 2 setTimeout 1'
  console.log("setTimeout 1");

  const promise1 = new Promise((resolve) => {
    resolve("then 4");
  });

  promise1.then((value) => {
    console.log(value);

    setTimeout(() => {
      console.log("setTimeout 2");
      clearInterval(intervalId);
    }, 10);
  });
}, 10);

const promise2 = new Promise((resolve) => {
  resolve("then 1");
});

promise2
  .then((value) => {
    console.log(value);
    return "then 2";
  })
  .then((value) => {
    console.log(value);

    return new Promise((resolve) => {
      setTimeout(resolve, 10, "then 3");
    });
  })
  .then((value) => {
    console.log(value);
  });
