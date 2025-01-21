import readlineSync from "readline-sync";

const ids = [
  "Ford - Keilriemen",
  "VW - Keilriemen",
  "Porsche - Keilriemen",
  "Ford - Bremsklötze",
  "VW - Bremsklötze",
  "Porsche - Bremsklötze",
];

const amount = [3, 5, 1, 4, 8, 0];

/* const search = "VW"; */
/* const search = "Porsche"; */
do {
  let search = readlineSync.question("Geben Sie Ihre Suche ein: ");
  let n = 0;

  for (let i = 0; i < ids.length; i++) {
    if (ids[i].includes(search)) {
      n++;
      if (amount[i] > 0) {
        console.log(n + ". " + ids[i] + " " + amount[i]);
      } else {
        console.log(`Nicht auf Lager: ` + n + ". " + ids[i] + " " + amount[i]);
      }
    }
  }
  if (n === 0) {
    console.log(`Sorry wir nehmen keine ${search} an!`);
  }
} while (1);
