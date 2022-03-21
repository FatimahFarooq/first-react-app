import React from "react";

import "./index.css";
// function Greeting() {
//   return <h4>hello world</h4>;
// }

const books = [
  {
    id: 1,
    author: "Adam Wallace",
    type: "hardcover",
    price: "7.43",
    title: "How to Catch a Leprechaun",
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/81hSK0bkkFL._AC_UL604_SR604,400_.jpg",
  },

  {
    id: 2,
    author: "Colleen Hoover",
    type: "Paperback",
    price: "45.52",
    title: "It Ends with Us",
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
];

function Booklist() {
  const clickHandler = (title) => console.log(title);

  return (
    <article>
      {books.map((book) => {
        return (
          <section key={book.id}>
            <Book book={book} />
            <button onClick={() => clickHandler(book.title)}>View</button>
          </section>
        );
      })}
      {/* <AnotherBook book={secondBook} /> */}
    </article>
  );
}

function Book({ book }) {
  // const { cover, title, author, type, price } = book;
  return (
    <>
      <Image book_img={book.cover} />
      <Title title={book.title} />
      <Author author={book.author} />
      <Type type={book.type} />
      <Price price={book.price} />
    </>
  );
}

function AnotherBook({ book }) {
  return (
    <>
      <img src={book.cover} alt="book" />;<p>{book.title}</p>;
      <p>{book.author} </p>;<h6>{book.type}</h6>;<h6>{book.price}</h6>;
    </>
  );
}

function Author({ author }) {
  return <p>{author} </p>;
}

const Type = ({ type }) => <h6>{type}</h6>;

const Title = ({ title }) => <p>{title}</p>;

const Price = ({ price }) => {
  return <h6>{price}</h6>;
};

const Image = ({ book_img }) => {
  return <img src={book_img} alt="book" />;
};

export default Booklist;
