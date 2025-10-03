// sample.js
//  Document Object Model (DOM) 
// DOM allows access of elements using methods like getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("demoForm");
    document.getElementById("myH").innerHTML = "Welcome"
    // document.getElementById("myH").uppercase
    let k = 5;
    k += 8;
    alert("k is equal to "+ k)
    let x = 5;
    x = 7;
    y = "20";
x = x + y;
    alert("x is equal to " + x);
    // Object:
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 36,
        height: 5.96
    };
    // delete person.height;
    delete person["height"];
    // alert("The author's name is " + person.firstName + " " + person.lastName)
    alert("The author's name is "+ person["firstName"] +" "+ person.lastName)

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Collect form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    // Log or send data (example: log to console)
    alert("Form Submitted:", data);

    // Optionally: send to server using fetch
    /*
    fetch("/submit-url", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(result => console.log("Success:", result))
      .catch(error => console.error("Error:", error));
    */
  });
});
