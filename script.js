//your JS code here. If required.
function manipulateArrayAndDisplay(inputArray) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  });

  promise
    .then((result) => {
      // Filter out odd numbers after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredArray = result.filter((num) => num % 2 === 0);
          resolve(filteredArray);
        }, 1000);
      });
    })
    .then((result) => {
      // Multiply even numbers by 2 after 2 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedArray = result.map((num) => (num % 2 === 0 ? num * 2 : num));
          resolve(multipliedArray);
        }, 2000);
      });
    })
    .then((result) => {
      // Update the text of the HTML element with id "output"
      const outputElement = document.getElementById("output");
      outputElement.textContent = result.join(", ");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const inputArray = [1, 2, 3, 4];
manipulateArrayAndDisplay(inputArray);
