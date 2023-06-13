"use strict";

function pow(x, n) {
  if (typeof n !== `number` || !Number.isInteger(n) || n < 0) {
    console.error(`Invalid n`);
  }
  if (n === 0) {
    return 1;
  }
  return x *= pow(x, n - 1);
}
alert(pow(2, 3)); // 8