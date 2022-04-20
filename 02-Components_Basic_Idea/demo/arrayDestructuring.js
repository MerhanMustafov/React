const array = ["Peter", "age", "number", 23];
console.log(array);

try {
  console.log(name);
} catch (err) {
  console.log(err.message);
}

const [name] = array;
try {
  console.log(name);
} catch (err) {
  console.log(err.message);
}

const [{}, age, {}, years] = array;
try {
  console.log(age, years);
} catch (err) {
  console.log(err.message);
}
