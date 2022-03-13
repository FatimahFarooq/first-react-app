import React from "react";
import ReactDOM from "react-dom";

// function Greeting() {
//   return <h4>hello world</h4>;
// }

function Booklist() {
  return (
    <>
      <Book
        author="Colleen Hoover"
        type="Paperback"
        price="45.52"
        title="It Ends with Us"
        cover="https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
      />
      <Book
        author="Colleen Hoover"
        type="Paperback"
        price="45.52"
        title="It Ends with Us"
        cover="https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
      />
    </>
  );
}

function Book({ cover, title, author, type, price }) {
  // const { cover, title, author, type, price } = book;
  return (
    <>
      <Image book_img={cover} />
      <Title title={title} />
      <Author author={author} />
      <Type type={type} />
      <Price price={price} />
    </>
  );
}

function Author({ author }) {
  return <p>{author} </p>;
}

const Type = ({ type }) => <h6>{type}</h6>;

const Title = ({ title }) => <p>{title}</p>;

const Price = ({ price }) => {
  return <h5>{price}</h5>;
};

const Image = ({ book_img }) => {
  return <img src={book_img} alt="book" />;
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
