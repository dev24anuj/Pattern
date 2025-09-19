function pattern() {
  console.log("\npattern 8");
  let n = 7;
  for (i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    for (j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }
    for (j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    console.log(row);
  }
  for (let i = n - 2; i >= 0; i--) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

module.exports = pattern;
