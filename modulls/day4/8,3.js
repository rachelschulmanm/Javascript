const book1 = {
  bookName: "hello",
  authorName: "rachel",
  publishingYear: 1998,
  pages: 350,
};
const book2 = {
  bookName: "hi",
  authorName: "chani",
  publishingYear: 1994,
  pages: 400,
};
const bookUtils = {
  getFirstPublished: function (b1, b2) {
    return b1.publishingYear < b2.publishingYear ? b1 : b2;
  },
};
console.log(bookUtils.getFirstPublished(book1, book2));
