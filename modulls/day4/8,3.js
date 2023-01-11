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
  setNewEdition: function (b, editionYear) {
    b.latestEdition = editionYear;
  },
  setLanguage: function (b, language) {
    b.newlanguage = language;
  },
  setTranslation: function (bl, translator) {
    b.trtranslation = translator;
  },
};
// bookUtils.setNewEdition(book1, 2004);
// bookUtils.setNewEdition(book2, 2008);
// console.log(book1.latestEdition);
// console.log(book2.latestEdition);
// console.log(bookUtils.getFirstPublished(book1, book2));
bookUtils.setLanguage(book1, "english");
bookUtils.setLanguage(book2);

console.log(book1);
