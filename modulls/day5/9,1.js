const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  let newneighbors = listOfNeighbours[i];
  for (let j = 0; j < newneighbors.length; j++) {
    console.log(`Neighbour: ${newneighbors[j]}`);
  }
}
