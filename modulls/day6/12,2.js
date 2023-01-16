const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id1) {
  let gfd = candyStore.candies.filter((candies) => candies.id == id1);

  return gfd;
}
console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id1) {
  let gfd = candyStore.candies.filter((candies) => candies.id == id1);

  return gfd["price"] + " " + gfd["id"];
}
console.log(getPrice(candyStore, "5hd7y"));
