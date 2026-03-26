function add(num1, num2) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    throw new Error("Ini harus angka yaa!");
  }
  return num1 + num2;
}

function divide(num3, num4) {
  return num3 / num4;
}

module.exports = { 
    add, 
    divide,
};