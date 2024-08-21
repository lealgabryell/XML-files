const xpath = require('xpath');
const { DOMParser } = require('xmldom');


const xmlString = `
<catalog>
  <book id="bk1">
    <name>Book A</name>
    <title>Programming in Notes</title>
    <price>129.99</price>
  </book>
</catalog>
<catalog>
  <book id="bk2">
    <name>Book B</name>
    <title>Programming in ChatGPT</title>
    <price>99.99</price>
  </book>
</catalog>
<catalog>
  <book id="bk3">
    <name>Book C</name>
    <title>Programming in Rocks</title>
    <price>19.99</price>
  </book>
</catalog>
`;

const doc = new DOMParser().parseFromString(xmlString);

const searchTitle = xpath.select("//book/title", doc);
const searchByPrice = xpath.select("//book[price < 99.99]/price", doc);


searchTitle.forEach((e) => {
  console.log(e.firstChild.data);
});
searchByPrice.forEach((e) => {
  console.log(e.firstChild.data);
});