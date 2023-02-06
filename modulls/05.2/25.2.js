let obj = {
  name: "rachel",
  printName: function () {
    return this.name;
  },
  printAfterSec: function () {
    const m = this.printName.bind(obj);
    const l = function () {
      console.log(m());
    };
    setTimeout(l, 1000);
  },
};
console.log(obj.printAfterSec());
