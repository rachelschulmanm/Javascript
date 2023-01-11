const book = {
  bookName: "hello",
  authorName: "rachel",
  publishingYear: 1998,
  pages: 350,
};
let book2 = (book) => {
  console.log(
    book.bookName + " " + book.authorName + " " + book.publishingYear
  );

  //   return book.bookName + " " + book.authorName + " " + book.publishingYear;
};
// console.log(book.bookName + " " + book.authorName + " " + book.publishingYear);
book2(book);
