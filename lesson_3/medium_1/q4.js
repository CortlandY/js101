function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

console.log(addToRollingBuffer1([1, 2, 3], 4, 4));
console.log(addToRollingBuffer2([1, 2, 3], 4, 4));

/* concat does not mutate the original array, whereas push does.
Both operations will return the same values, however.
*/