function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

/*
For ternary operatory, code1 executes for true and code 2 executes for false.
the inner rps expressions evaluate to paper and rock.
rps(paper,rock) evaluates to paper.
this leads us to a final rps(paper, rock), which returns a final
value of paper.

**** final output is paper ****
*/