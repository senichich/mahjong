import { intervalOfTiles, disjoint } from "./utils.js";

let game = document.getElementById("gameShape");
let help;
let helpDepth;
let helpTop;
let helpLeft;
//TURTLE
const turtle0 = [
  ...intervalOfTiles(1, 12).map((x) => [x, 0, 0]),
  ...intervalOfTiles(3, 10).map((x) => [x, 1, 0]),
  ...intervalOfTiles(2, 11).map((x) => [x, 2, 0]),
  [0, 3.5, 0],
  ...intervalOfTiles(1, 12).map((x) => [x, 3, 0]),
  ...intervalOfTiles(1, 12).map((x) => [x, 4, 0]),
  [13, 3.5, 0],
  [14, 3.5, 0],
  ...intervalOfTiles(2, 11).map((x) => [x, 5, 0]),
  ...intervalOfTiles(3, 10).map((x) => [x, 6, 0]),
  ...intervalOfTiles(1, 12).map((x) => [x, 7, 0]),
].reverse();
const turtle1 = [
  ...intervalOfTiles(4, 9).map((x) => [x, 1, 1]),
  ...intervalOfTiles(4, 9).map((x) => [x, 2, 1]),
  ...intervalOfTiles(4, 9).map((x) => [x, 3, 1]),
  ...intervalOfTiles(4, 9).map((x) => [x, 4, 1]),
  ...intervalOfTiles(4, 9).map((x) => [x, 5, 1]),
  ...intervalOfTiles(4, 9).map((x) => [x, 6, 1]),
].reverse();

const turtle2 = [
  ...intervalOfTiles(5, 8).map((x) => [x, 2, 2]),
  ...intervalOfTiles(5, 8).map((x) => [x, 3, 2]),
  ...intervalOfTiles(5, 8).map((x) => [x, 4, 2]),
  ...intervalOfTiles(5, 8).map((x) => [x, 5, 2]),
].reverse();

const turtle3 = [
  ...intervalOfTiles(6, 7).map((x) => [x, 3, 3]),
  ...intervalOfTiles(6, 7).map((x) => [x, 4, 3]),
].reverse();

const turtle4 = [[6.5, 3.5, 4]];
export const turtle = [
  ...turtle0,
  ...turtle1,
  ...turtle2,
  ...turtle3,
  ...turtle4,
];
//FISH
const fish0 = [
  [5, 0, 0],
  ...intervalOfTiles(4, 6).map((x) => [x, 1, 0]),
  [12, 1, 0],
  ...intervalOfTiles(3, 7).map((x) => [x, 2, 0]),
  ...intervalOfTiles(11, 12).map((x) => [x, 2, 0]),
  ...intervalOfTiles(2, 12).map((x) => [x, 3, 0]),
  ...intervalOfTiles(1, 12).map((x) => [x, 4, 0]),
  ...intervalOfTiles(2, 12).map((x) => [x, 5, 0]),
  ...intervalOfTiles(4, 6).map((x) => [x, 6, 0]),
  ...intervalOfTiles(11, 12).map((x) => [x, 6, 0]),
  [5, 7, 0],
  [12, 7, 0],
];
const fish1 = [
  [5, 1, 1],
  [12, 1, 1],
  ...intervalOfTiles(3, 6).map((x) => [x, 2, 1]),
  ...intervalOfTiles(11, 12).map((x) => [x, 2, 1]),
  ...intervalOfTiles(2, 12).map((x) => [x, 3, 1]),
  ...intervalOfTiles(1, 12).map((x) => [x, 4, 1]),
  ...intervalOfTiles(2, 12).map((x) => [x, 5, 1]),
  ...intervalOfTiles(4, 6).map((x) => [x, 6, 1]),

  ...intervalOfTiles(11, 12).map((x) => [x, 6, 1]),
  [5, 7, 1],
  [12, 7, 1],
];
const fish2 = [
  [5, 2, 2],
  ...intervalOfTiles(11, 12).map((x) => [x, 2, 2]),
  ...intervalOfTiles(3, 12).map((x) => [x, 3, 2]),
  ...intervalOfTiles(2, 12).map((x) => [x, 4, 2]),
  ...intervalOfTiles(3, 12).map((x) => [x, 5, 2]),
  [5, 6, 2],
  ...intervalOfTiles(11, 12).map((x) => [x, 6, 2]),
];
const fish3 = [
  ...intervalOfTiles(3.5, 4.5).map((x) => [x, 3.5, 3]),
  ...intervalOfTiles(3.5, 4.5).map((x) => [x, 4.5, 3]),
];
const fish4 = [[4, 4, 4]];
export const fish = [...fish0, ...fish1, ...fish2, ...fish3, ...fish4];
//anchor
const anchor0 = [
  [7, 0, 0],
  [6, 0.5, 0],
  [8, 0.5, 0],
  [6, 1.5, 0],
  [8, 1.5, 0],
  [7, 2, 0],
  [7, 3, 0],
  [7, 4, 0],
  [7, 5, 0],
  [7, 6, 0],
  [7, 7, 0],
  [1, 2.5, 0],
  [13, 2.5, 0],
  ...intervalOfTiles(0.5, 1.5).map((x) => [x, 3.5, 0]),
  ...intervalOfTiles(4, 6).map((x) => [x, 3.5, 0]),
  ...intervalOfTiles(8, 10).map((x) => [x, 3.5, 0]),
  ...intervalOfTiles(12.5, 13.5).map((x) => [x, 3.5, 0]),
  [1, 4.5, 0],
  [2, 5, 0],
  [3, 5.5, 0],
  [4, 6, 0],
  ...intervalOfTiles(5, 6).map((x) => [x, 6.5, 0]),
  ...intervalOfTiles(8, 9).map((x) => [x, 6.5, 0]),
  [10, 6, 0],
  [11, 5.5, 0],
  [12, 5, 0],
  [13, 4.5, 0],
];
const anchor1 = [
  [7, 0, 1],
  [6, 0.5, 1],
  [8, 0.5, 1],
  [6, 1.5, 1],
  [8, 1.5, 1],
  [7, 2, 1],
  [7, 3, 1],
  [7, 4, 1],
  [7, 5, 1],
  [7, 6, 1],
  [7, 7, 1],
  [1, 3.5, 1],
  ...intervalOfTiles(5, 6).map((x) => [x, 3.5, 1]),
  [8, 3.5, 1],
  [13, 3.5, 1],
  [1, 4.5, 1],
  [2, 5, 1],
  [3, 5.5, 1],
  [4, 6, 1],
  ...intervalOfTiles(5, 6).map((x) => [x, 6.5, 1]),
  ...intervalOfTiles(8, 9).map((x) => [x, 6.5, 1]),
  [10, 6, 1],
  [11, 5.5, 1],
  [12, 5, 1],
  [13, 4.5, 1],
];
const anchor2 = [
  [6, 1, 2],
  [8, 1, 2],
  [7, 2.5, 2],
  [7, 3.5, 2],
  [7, 4.5, 2],
  [7, 5.5, 2],
  [6, 3.5, 2],
  [1, 4, 2],
  [13, 4, 2],
  [2, 5, 2],
  [3, 5.5, 2],
  [4, 6, 2],
  ...intervalOfTiles(5, 9).map((x) => [x, 6.5, 2]),
  [10, 6, 2],
  [11, 5.5, 2],
  [12, 5, 2],
];
export const anchor = [...anchor0, ...anchor1, ...anchor2];
//CROSS
const cross0 = [
  ...intervalOfTiles(4, 8).map((x) => [x, 0, 0]),
  ...intervalOfTiles(5, 7).map((x) => [x, 1, 0]),
  [6, 2, 0],
  [6, 3, 0],
  [6, 4, 0],
  [6, 5, 0],
  ...intervalOfTiles(5, 7).map((x) => [x, 6, 0]),
  ...intervalOfTiles(4, 8).map((x) => [x, 7, 0]),
  [1, 2, 0],
  [1, 3, 0],
  [1, 4, 0],
  [1, 5, 0],
  [2, 2.5, 0],
  [2, 3.5, 0],
  [2, 4.5, 0],
  [3, 3, 0],
  [3, 4, 0],
  ...intervalOfTiles(4, 5).map((x) => [x, 3.5, 0]),
  ...intervalOfTiles(7, 8).map((x) => [x, 3.5, 0]),
  [11, 2, 0],
  [11, 3, 0],
  [11, 4, 0],
  [11, 5, 0],
  [10, 2.5, 0],
  [10, 3.5, 0],
  [10, 4.5, 0],
  [9, 3, 0],
  [9, 4, 0],
];
const cross1 = [
  ...intervalOfTiles(5, 7).map((x) => [x, 0.5, 1]),
  [6, 1.5, 1],
  [6, 2.5, 1],
  [6, 3.5, 1],
  [6, 4.5, 1],
  [6, 5.5, 1],
  ...intervalOfTiles(5, 7).map((x) => [x, 6.5, 1]),
  [1, 2.5, 1],
  [1, 3.5, 1],
  [1, 4.5, 1],
  [2, 3, 1],
  [2, 4, 1],
  ...intervalOfTiles(3, 5).map((x) => [x, 3.5, 1]),
  ...intervalOfTiles(6, 9).map((x) => [x, 3.5, 1]),
  [11, 2.5, 1],
  [11, 3.5, 1],
  [11, 4.5, 1],
  [10, 3, 1],
  [10, 4, 1],
];
const cross2 = [
  [6, 1, 2],
  [6, 2, 2],
  [6, 3, 2],
  [6, 4, 2],
  [6, 5, 2],
  [6, 6, 2],
  ...intervalOfTiles(2, 5).map((x) => [x, 3.5, 2]),
  ...intervalOfTiles(7, 10).map((x) => [x, 3.5, 2]),
];
const cross3 = [
  [6, 1.5, 3],
  [6, 2.5, 3],
  [6, 3.5, 3],
  [6, 4.5, 3],
  [6, 5.5, 3],
  ...intervalOfTiles(3, 5).map((x) => [x, 3.5, 3]),
  ...intervalOfTiles(7, 9).map((x) => [x, 3.5, 3]),
];
const cross4 = [
  [5, 3.5, 4],
  [7, 3.5, 4],
];
export const cross = [...cross0, ...cross1, ...cross2, ...cross3, ...cross4];
//WAVES
const waves0 = [
  ...intervalOfTiles(1, 14).map((x) => [x, 0, 0]),
  ...intervalOfTiles(1, 14).map((x) => [x, 2, 0]),
  ...intervalOfTiles(1, 14).map((x) => [x, 3, 0]),
  ...intervalOfTiles(1, 14).map((x) => [x, 5, 0]),
];
const waves1 = [
  ...intervalOfTiles(1.5, 5.5).map((x) => [x, 0, 1]),
  ...intervalOfTiles(9.5, 13.5).map((x) => [x, 0, 1]),
  ...intervalOfTiles(1, 6).map((x) => [x, 2, 1]),
  ...intervalOfTiles(1, 6).map((x) => [x, 3, 1]),
  ...intervalOfTiles(9, 14).map((x) => [x, 2, 1]),
  ...intervalOfTiles(9, 14).map((x) => [x, 3, 1]),
  ...intervalOfTiles(1.5, 5.5).map((x) => [x, 5, 1]),
  ...intervalOfTiles(9.5, 13.5).map((x) => [x, 5, 1]),
];
const waves2 = [
  ...intervalOfTiles(2.5, 4.5).map((x) => [x, 0, 2]),
  ...intervalOfTiles(10.5, 12.5).map((x) => [x, 0, 2]),
  ...intervalOfTiles(1, 4).map((x) => [x, 2, 2]),
  ...intervalOfTiles(1, 4).map((x) => [x, 3, 2]),
  ...intervalOfTiles(11, 14).map((x) => [x, 2, 2]),
  ...intervalOfTiles(11, 14).map((x) => [x, 3, 2]),
  ...intervalOfTiles(2.5, 4.5).map((x) => [x, 5, 2]),
  ...intervalOfTiles(10.5, 12.5).map((x) => [x, 5, 2]),
];
const waves3 = [
  ...intervalOfTiles(1, 2).map((x) => [x, 2, 3]),
  ...intervalOfTiles(1, 2).map((x) => [x, 3, 3]),
  ...intervalOfTiles(13, 14).map((x) => [x, 2, 3]),
  ...intervalOfTiles(13, 14).map((x) => [x, 3, 3]),
];
const waves4 = [
  [1, 2, 4],
  [1, 3, 4],
  [14, 2, 4],
  [14, 3, 4],
];
export const waves = [...waves0, ...waves1, ...waves2, ...waves3, ...waves4];

//random choise

export function randomArray() {
  const arrays = [waves, cross, anchor, fish, turtle];
  const randomIndex = Math.floor(Math.random() * arrays.length);
  return arrays[randomIndex];
}
export let coordinatesOfTiles = randomArray();

const renderName = function () {
  if (coordinatesOfTiles === turtle) {
    game.textContent = "Turtle";
  } else if (coordinatesOfTiles === fish) {
    game.textContent = "Fish";
  } else if (coordinatesOfTiles === waves) {
    game.textContent = "Waves";
  } else if (coordinatesOfTiles === cross) {
    game.textContent = "Cross";
  } else if (coordinatesOfTiles === anchor) {
    game.textContent = "Anchor";
  }
};
//Rendering name of figure
renderName();
//Settings of figure

const settingFigure = function () {
  if (coordinatesOfTiles === turtle) {
    helpDepth = 7;
    helpTop = 30;
    helpLeft = 80;
  } else if (coordinatesOfTiles === fish) {
    helpDepth = 4;
    helpTop = 30;
    helpLeft = 80;
  } else if (coordinatesOfTiles === waves) {
    helpDepth = 4;
    helpLeft = 80;
    helpTop = 90;
  } else if (coordinatesOfTiles === cross) {
    helpDepth = 3;
    helpTop = 35;
    helpLeft = 140;
  } else if (coordinatesOfTiles === anchor) {
    helpDepth = 4;
    helpTop = 30;
    helpLeft = 60;
  }
};
settingFigure();
export let depthOfTile = helpDepth;
export let offsetTopTole = helpTop;
export let offsetLeftTile = helpLeft;
$("#restartButton").click(() => {
  game.textContent = "";
  $(".tile").remove();

  // Ustaw nowe koordynaty
  coordinatesOfTiles = randomArray();
  if (coordinatesOfTiles === turtle) {
    helpDepth = 7;
    offsetTopTole = 30;
    offsetLeftTile = 80;
  } else if (coordinatesOfTiles === fish) {
    helpDepth = 4;
    offsetTopTole = 30;
    offsetLeftTile = 80;
  } else if (coordinatesOfTiles === waves) {
    helpDepth = 4;
    offsetLeftTile = 30;
    offsetTopTole = 90;
  } else if (coordinatesOfTiles === cross) {
    helpDepth = 3;
    offsetTopTole = 35;
    offsetLeftTile = 140;
  } else if (coordinatesOfTiles === anchor) {
    helpDepth = 4;
    offsetTopTole = 30;
    offsetLeftTile = 60;
  }
  renderName();
});

//////////////////////////
function leftNeighboursOfTile(coordinates) {
  if (
    coordinates.toString() === [1, 3, 0].toString() ||
    coordinates.toString() === [1, 4, 0].toString()
  ) {
    return [[0, 3.5, 0]];
  } else if (coordinates.toString() === [13, 3.5, 0].toString()) {
    return [
      [12, 3, 0],
      [12, 4, 0],
    ];
  }
  const [x, y, z] = coordinates;
  return [[x - 1, y, z]];
}

function rightNeighboursOfTile(coordinates) {
  if (coordinates.toString() === [0, 3.5, 0].toString()) {
    return [
      [1, 3, 0],
      [1, 4, 0],
    ];
  } else if (
    coordinates.toString() === [12, 3, 0].toString() ||
    coordinates.toString() === [12, 4, 0].toString()
  ) {
    return [[13, 3.5, 0]];
  }
  const [x, y, z] = coordinates;
  return [[x + 1, y, z]];
}

export function tileIsOpen(coordinates, currentCoordinates) {
  if (disjoint([coordinates], currentCoordinates)) {
    return false;
  }
  const [x, y, z] = coordinates;
  if (
    coordinatesOfTiles === turtle &&
    (currentCoordinates.some(([a, b, c]) => a === x && b === y && c > z) ||
      (z === 3 && currentCoordinates.some(([a, b, c]) => c === 4)))
  ) {
    return false;
  } else if (
    coordinatesOfTiles === fish &&
    (currentCoordinates.some(([a, b, c]) => a === x && b === y && c > z) ||
      currentCoordinates.some(
        ([a, b, c]) => x + 0.5 === a && y + 0.5 === b && c > z
      ) ||
      currentCoordinates.some(
        ([a, b, c]) => x + 0.5 === a && y - 0.5 === b && c > z
      ) ||
      (z === 3 && currentCoordinates.some(([a, b, c]) => c === 4)))
  ) {
    return false;
  } else if (
    coordinatesOfTiles === anchor &&
    (currentCoordinates.some(([a, b, c]) => a === x && b === y && c > z) ||
      currentCoordinates.some(
        ([a, b, c]) => x === a && y + 0.5 === b && c > z
      ) ||
      currentCoordinates.some(
        ([a, b, c]) => x === a && y - 0.5 === b && c > z
      ) ||
      currentCoordinates.some(
        ([a, b, c]) => x - 1 === a && y + 0.5 === b && c === z
      ) ||
      currentCoordinates.some(
        ([a, b, c]) => x + 1 === a && y - 0.5 === b && c === z
      ) ||
      currentCoordinates.some(([a, b, c]) => x === 5 && y === 6.5 && z === 2) ||
      currentCoordinates.some(([a, b, c]) => x + 0.5 === a && y === b) ||
      currentCoordinates.some(([a, b, c]) => x - 0.5 === a && y === b) ||
      (z === 3 && currentCoordinates.some(([a, b, c]) => c === 4)))
  ) {
    return false;
  } else if (
    coordinatesOfTiles === cross &&
    (currentCoordinates.some(([a, b, c]) => a === x && b === y && c > z) ||
      currentCoordinates.some(
        ([a, b, c]) => x === a && y + 0.5 === b && c > z
      ) ||
      currentCoordinates.some(([a, b, c]) => x === a && y - 0.5 === b && c > z))
  ) {
    return false;
  } else if (
    coordinatesOfTiles === waves &&
    (currentCoordinates.some(([a, b, c]) => a === x && b === y && c > z) ||
      currentCoordinates.some(
        ([a, b, c]) => x + 0.5 === a && y === b && c > z
      ) ||
      currentCoordinates.some(([a, b, c]) => x - 0.5 === a && y === b && c > z))
  ) {
    return false;
  }
  return (
    disjoint(leftNeighboursOfTile(coordinates), currentCoordinates) ||
    disjoint(rightNeighboursOfTile(coordinates), currentCoordinates)
  );
}
