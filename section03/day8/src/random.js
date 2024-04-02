import Chance from "Chance";
const chage = new Chance();

export function getRandomName() {
  return chage.name();
}

export function getRandomEmail() {
  return chage.email();
}
