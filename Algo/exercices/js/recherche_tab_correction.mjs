import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {
  // 1. On configure l'interface de lecture (entrée/sortie)
  const sc = new createInterface({ input, output });
  let tailletab = parseInt(
    await sc.question("combien de valeur du tableau voulez-vous saisir ?"),
  );
  let tabnb = [];
  for (let i = 0; i < tailletab; i++) {
    tabnb.push(
      parseInt(
        await sc.question(`Veuillez saisir le nombre entier N° ${i + 1} :`),
      ),
    );
  }

  tabnb.sort((a, b) => a - b);

  const N = parseInt(await sc.question(" Veuillez saisir un nombre entier !!"));
  console.log(
    `vous avez choisi le nombre ${N} regardons si il existe dans le  tableau`,
  );

  let trouve = false;
  let position = 0;
  for (let i = 0; i < tailletab; i++) {
    if (tabnb[i] > N) {
      break;
    }
    if (tabnb[i] === N) {
      trouve = true;

      position = i + 1;
      break;
    }
  }
  if (trouve == true) {
    console.log(
      "le nombre est présent à la position n°" + (position) + " dans le tableau",
    );
  } else {
    console.log("404 Not found nombre saisi absent du tableau!");
  }

  sc.close();
}
await main();