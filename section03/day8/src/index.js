import { getRandomName, getRandomEmail } from "./random.js";

const nameFirst = getRandomName();
const nameTwo = getRandomName();
const nameThree = getRandomName();

console.log(nameFirst, nameTwo, nameThree);

const emailFirst = getRandomEmail();
const emailTwo = getRandomEmail();
const emailThree = getRandomEmail();
console.log(emailFirst, emailTwo, emailThree);
