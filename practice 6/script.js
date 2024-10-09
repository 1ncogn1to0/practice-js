//task 1
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let multiplication = num1 * num2;
    let division = num1 / num2;

    document.getElementById("result").innerHTML =
        "Multiplication: " + multiplication + "<br>" +
        "Division: " + division;
}
//task 2
function max_of_three(a, b, c) {
    return Math.max(a, b, c);
  }
  console.log("task 2:")
  console.log(max_of_three(1, 0, 1)); 
  console.log(max_of_three(0, -10, -20)); 
  console.log(max_of_three(1000, 510, 440)); 
//task 3
  function sumTriple(x, y) {
    if (x === y) {
      return 3 * (x + y);
    } else {
      return x + y;
    }
  }
  console.log("task 3:")
  console.log(sumTriple(10, 20)); 
  console.log(sumTriple(10, 10)); 
//task 4
  function near_100(x, y) {
    const diffX = Math.abs(100 - x);
    const diffY = Math.abs(100 - y);
  
    if (diffX === diffY) {
      return false;
    } else {
      return diffX < diffY ? x : y;
    }
  }
  console.log("task 4:")
  console.log(near_100(90, 89)); 
  console.log(near_100(-90, -89)); 
  console.log(near_100(90, 90)); 
//task 5
  function first_half(str) {
    if (str.length % 2 === 0) {
      return str.slice(0, str.length / 2);
    } else {
      return str;
    }
  }
  console.log("task 5:")
  console.log(first_half("Python"));
  console.log(first_half("JavaScript"));
  console.log(first_half("PHP"));