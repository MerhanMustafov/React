const obj = { contry: "Moldova", district: "Pridnestrovie", town: "Tiraspol" };
console.log(obj);

try {
  console.log(contry);
} catch (err) {
  console.log(err.message);
}

try {
  console.log(district);
} catch (err) {
  console.log(err.message);
}

const { contry, district } = obj;

console.log(contry);
console.log(district);
