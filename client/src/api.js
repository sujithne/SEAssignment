import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=genre:horror&orderBy=newest&maxResults=10')
      .then(response => response.json())
      .then(data => {
        const books = data.items.map(item => {
          const { id, volumeInfo } = item;
          const { title, authors, publishedDate, description, imageLinks } = volumeInfo;
          const thumbnail = imageLinks?.thumbnail || '';
          return { id, title, authors, publishedDate, description, thumbnail };
        });
        setBooks(books);
      });
  }, []);

  return (
    <Container>
      <h1 className="text-center">Popular Horror Books</h1>
      <Table striped bordered hover>
        <thead className='table-dark'>
          <tr className='text-center my-8'>
            <th>Title</th>
            <th>Cover Image</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td><img src={book.thumbnail} alt={book.title} /></td>
              <td>{book.authors.join(', ')}</td>
              <td>{book.publishedDate}</td>
              <td>{book.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default BookList;
