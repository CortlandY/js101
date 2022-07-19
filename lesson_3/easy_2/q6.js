// nested format
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// make it not nested
flintstones = [].concat(...flintstones);
console.log(flintstones);