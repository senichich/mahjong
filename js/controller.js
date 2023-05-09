import { coordinatesOfTiles, tileIsOpen } from "./coordinates.js";
import { tilesCreate } from "./tile.js";
import { images } from "./images.js";
import {} from "./buttons.js";
import {
  shuffleTiles,
  remove,
  tileFrontAt,
  chosenTile,
  renderResult,
  randEl,
  sleep,
} from "./utils.js";
import { startTimer, restartTimer, stopTimer } from "./timer.js";

let currentCoordinates = [...coordinatesOfTiles];
let selectedCoordinates = null;
let hintCoordinates = null;

function unselectedTile(coordinates) {
  if (!coordinates) return;
  tileFrontAt(coordinates).removeClass("selectedTile");
  selectedCoordinates = null;
}
function selectedTile(coordinates) {
  if (!coordinates) return;
  unselectedTile(selectedCoordinates);
  selectedCoordinates = coordinates;
  tileFrontAt(coordinates).addClass("selectedTile");
}

function executeMove(tile, selectedTile, coordinates, coordinates2) {
  selectedCoordinates = null;
  hintCoordinates = null;
  tile.animate({ opacity: 0 }, "slow");
  selectedTile.animate({ opacity: 0 }, "slow", () => {
    tile.hide();
    selectedTile.hide();
    remove(coordinates, currentCoordinates);
    remove(coordinates2, currentCoordinates);

    if (currentCoordinates.length === 0) {
      renderResult("You won!🥇");
    } else {
      // renderResult("Sorry.Try again");
      checkFutureMove("Computing...");
    }
  });
}

async function checkFutureMove(message) {
  renderResult(message);
  await sleep(50);
  const moves = [];
  for (let i = 0; i < currentCoordinates.length; i++) {
    for (let j = i + 1; j < currentCoordinates.length; j++) {
      const p = currentCoordinates[i];
      const q = currentCoordinates[j];
      if (
        p.toString() !== q.toString() &&
        chosenTile(p).attr("type") === chosenTile(q).attr("type") &&
        tileIsOpen(p, currentCoordinates) &&
        tileIsOpen(q, currentCoordinates)
      ) {
        moves.push([p, q]);
      }
    }
  }
  updateStatus(moves.length);
  if (moves.length > 0) {
    hintCoordinates = randEl(randEl(moves));
  }
}

function updateStatus(numberOfMove) {
  if (numberOfMove === 0) {
    renderResult("There are no moves left! Gameover!");
    stopTimer();
  } else if (numberOfMove === 1) {
    renderResult("There is <strong>exactly one</strong> possible move!");
  } else {
    renderResult(
      "There are <strong>" + numberOfMove + "</strong> possible moves."
    );
  }
}
function choiceOfTile(coordinates) {
  if (!tileIsOpen(coordinates, currentCoordinates)) return;
  if (selectedCoordinates) {
    if (coordinates.toString() === selectedCoordinates.toString()) {
      unselectedTile(coordinates);
      return;
    } else {
      const tile = chosenTile(coordinates);
      const selectedTile = chosenTile(selectedCoordinates);
      if (tile.attr("type") === selectedTile.attr("type")) {
        executeMove(tile, selectedTile, coordinates, selectedCoordinates);
        return;
      }
    }
  }
  selectedTile(coordinates);
}

$("#hintButton").click(() => {
  if (!hintCoordinates) return;
  let toggleNumber = 6;
  let toggleDelay = 500;
  for (let i = 0; i < toggleNumber; i++) {
    setTimeout(() => {
      tileFrontAt(hintCoordinates).toggleClass("alertTile");
    }, toggleDelay * i);
  }
  setTimeout(() => {
    // podświetlenie po wskazówce
    selectedTile(hintCoordinates);
  }, toggleDelay * toggleNumber);
});

$("#restartButton").click(async () => {
  $("#game").animate({ opacity: 0 }, "fast");
  await sleep(200);
  selectedCoordinates = null;
  hintCoordinates = null;
  currentCoordinates = [...coordinatesOfTiles];
  shuffleTiles(images);

  for (let i = 0; i < coordinatesOfTiles.length; i++) {
    const coord = coordinatesOfTiles[i];
    const image = images[i];
    chosenTile(coord).show().attr("type", image.attr("type"));
    tileFrontAt(coord).removeClass("selectedTile").html("").append(image);
  }
  tilesCreate({ clickFunction: choiceOfTile });
  await checkFutureMove("Game is restarting...");
  $("#game").animate({ opacity: 1 }, "fast");
  restartTimer();
  startTimer();
});
async function gameInit() {
  shuffleTiles(images);
  tilesCreate({ clickFunction: choiceOfTile });
  await checkFutureMove("Game is loading...");
  $("#game").animate({ opacity: 1 }, "slow");
  startTimer();
}

gameInit();
