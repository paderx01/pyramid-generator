const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 0; i < count; i += 1) {
  rows.push(padRow(i + 1, count));
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
const call = padRow();
console.log(call);
for (let i = 1; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = "";
for (const row of rows) {
  result = result + "\n" + row;
}
console.log(result);
