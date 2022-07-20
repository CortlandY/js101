function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
console.log(factors(99));

/* BONUS: The purpose of number % divisor === 0
is to ensure factors only includes whole numbers
if we use factors.push(divisor) then the factors will be listed in
descending order rather than ascending
*/