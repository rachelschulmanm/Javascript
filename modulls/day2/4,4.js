function printNumbers(args) {
  for (var i = 1; i <= args; i++) {
    if (i % 7 === 0 && i === 7) {
      console.log("boom-boom");
    } else if (i % 7 === 0) {
      console.log("boom");
    } else {
      console.log(i);
    }
  }
}
printNumbers(20);
