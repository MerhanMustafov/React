let [one, ...rest] = "1, 2, 3, 4".split(",").map((x) => x.trim());
console.log(one);
console.log(rest);
