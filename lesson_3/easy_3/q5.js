// the first method simply returns the conditional result

function isColorValid(color) {
  return (color === "blue" || color === "green");
}

/* the second method is the same as method 1,
but simplifies to an arrow function */

const isColorValid2 = color => color === "blue" || color === "green";

// a third method allows for more than 2 options

const isColorValid3 = color => ["blue", "green"].includes(color);
