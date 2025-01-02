import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold text-center '>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 '>
                {
                    books.map(book => <Book
                        key={book.Title}
                        book={book}
                    />)
                }
            </div>
        </div>
    );
};

export default Books;