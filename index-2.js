const ids = [
  "Ford - Keilriemen",
  "VW - Keilriemen",
  "Porsche - Keilriemen",
  "Ford - Bremsklötze",
  "VM - Bremsklötze",
  "Porsche - Bremsklötze",
];

const amount = [3, 5, 1, 4, 8, 0];

const search = "Ford";

let n = 0;

for (let i = 0; i < ids.length; i++) {
  if (ids[i].includes(search)) {
    n++;
    console.log(n + ". " + ids[i] + " " + amount[i]);
  }
}
if (n === 0) {
  console.log(`Sorry wir nehmen keine ${search} an!`);
}
