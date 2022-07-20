function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());

/*
foo always returns 'yes'
therefore, we can consider bar('yes'), which is false
in ternary operators, the second code (after the colon) executes for
false, so we can expect a 'no' output
*/