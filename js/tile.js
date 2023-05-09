import { coordinatesOfTiles } from "./coordinates.js";
import { images } from "./images.js";
import { widthOfTile, heightOfTile, roundnessOfTile } from "./global.js";
import { depthOfTile, offsetLeftTile, offsetTopTole } from "./coordinates.js";

//createTiles
export function tilesCreate(options) {
  for (let licznik = 0; licznik < coordinatesOfTiles.length; licznik++) {
    const crd = coordinatesOfTiles[licznik]; // cdr - координати
    const [x, y, z] = crd;
    const image = images[licznik];

    const newTile = $("<div></div>")
      .addClass("tile")
      .css({
        left: x * widthOfTile + depthOfTile * z + offsetLeftTile + "px",
        top: y * heightOfTile + depthOfTile * z + offsetTopTole + "px",
        zIndex: z,
      })
      .attr({
        type: image.attr("type"),
        coord: crd.toString(),
      });
    const frontOfTile = $("<div></div>")
      .addClass("tileFront")
      .css({
        width: widthOfTile + "px",
        height: heightOfTile + "px",
        borderRadius: roundnessOfTile + "px",
      })
      .attr({
        type: image.attr("type"),
        coord: crd.toString(),
      })
      .click(() => {
        options.clickFunction(crd);
      })
      .append(image);

    const backOfTile = $("<div></div>")
      .addClass("tileBack")
      .css({
        width: widthOfTile + depthOfTile + "px",
        height: heightOfTile + depthOfTile + "px",
        top: -depthOfTile + "px",
        left: -depthOfTile + "px",
        borderRadius: `
                    ${roundnessOfTile}px
                    ${2 * depthOfTile}px
                    ${roundnessOfTile}px
                    ${2 * depthOfTile}px`,
      });

    newTile.append(backOfTile).append(frontOfTile).appendTo("#game");
  }
}
