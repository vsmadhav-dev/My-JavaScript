const books = [
  {
    title: 'Atomic Habits',
    authorName: 'James Clear',
    releaseYear: 2018
  },
  {
    title: 'Zero to Sold',
    authorName: 'Arvid Kahl',
    releaseYear: 2020
  },
  {
    title: 'Rich Dad Poor Dad',
    authorName: 'Robert Kiyosaki',
    releaseYear: 1997
  }
];
function sortByYear(book1 , book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  }else if(book1.releaseYear > book2.releaseYear){
    return 1;
  }else if(book1.releaseYear === book2.releaseYear){
    return 0;
  }
}
const filteredBooks = books.filter((year) => year.releaseYear > 2000 )
filteredBooks.sort(sortByYear);
console.log(filteredBooks)