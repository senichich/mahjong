export const images = [];
import { widthOfTile, heightOfTile } from "./global.js";

const types = [
  { name: "coins", number: 9, multiplicity: 4 },
  { name: "bamboo", number: 9, multiplicity: 4 },
  { name: "character", number: 9, multiplicity: 4 },
  { name: "wind", number: 4, multiplicity: 4 },
  { name: "dragon", number: 3, multiplicity: 4 },
  { name: "flower", number: 4, multiplicity: 1 },
  { name: "season", number: 4, multiplicity: 1 },
];
// w sumie 144 : (3*(4*9) +4*4....)
types.forEach((type) => {
  for (let i = 1; i <= type.number; i++) {
    for (let j = 1; j <= type.multiplicity; j++) {
      const image = $("<img></img>")
        .css({
          with: widthOfTile,
          height: heightOfTile,
        })
        .attr({
          src: `./img/${type.name}${i}.png`,
          type: type.multiplicity > 1 ? `${type.name}${i}` : type.name,
        });

      images.push(image);
    }
  }
});
