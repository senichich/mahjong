export function intervalOfTiles(start, end) {
  return new Array(end - start + 1).fill(0).map((_, index) => start + index);
}
export function shuffleTiles(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
}

export function disjoint(list1, list2) {
  return list1.every((a) => list2.every((b) => a.toString() != b.toString()));
}
export function remove(element, list) {
  const i = list.findIndex(
    (sElemnt) => sElemnt.toString() === element.toString()
  ); // sElement - search element
  list.splice(i, 1);
}
export function tileFrontAt(coordinates) {
  return $(`.tileFront[coord="${coordinates.toString()}"]`);
}
export function chosenTile(coordinates) {
  return $(`.tile[coord="${coordinates.toString()}"]`);
}

export function renderResult(content) {
  $("#statusText").html(content);
}
export function randEl(list) {
  const i = Math.floor(list.length * Math.random());
  return list[i];
}
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
