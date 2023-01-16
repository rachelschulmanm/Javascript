const vidioe = [
  {
    title: "sdasf",
    id: 123,
  },
];

// vidioe.forEach(function (vid) {
//   console.log(vid.title, vid.id);
// });

const newv = vidioe.map(function (vid) {
  return [vid.title, vid.id];
});
console.log(newv);
