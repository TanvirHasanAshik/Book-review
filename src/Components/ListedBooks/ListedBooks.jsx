import React, { useEffect, useState } from 'react';
import { getReadBooks, getWishList } from '../../Utility/localstorage';
import { useLoaderData } from 'react-router-dom';
import ListBook from '../ListBook/ListBook';

const ListedBooks = () => {
    const readBooksLocalStorage = getReadBooks(); //read from local storage
    const wishListLocalStorage = getWishList(); //read from local storage
    const books = useLoaderData();
    const [listedReadBooks, setListedReadBooks] = useState([]);
    const [listedWishBooks, setListedWishBooks] = useState([]);

    useEffect(() => {
        const booksList = books.filter(book => readBooksLocalStorage.includes(book.Title));
        setListedReadBooks(booksList);

        const wishList = books.filter(book => wishListLocalStorage.includes(book.Title));
        setListedWishBooks(wishList);
    }, [books]);

    console.log(listedReadBooks, 'wish->', listedWishBooks)
    return (
        <div role="tablist" className="tabs tabs-lifted w-2/3 mx-auto mt-20">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" defaultChecked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                    listedReadBooks.map((book, index) => <ListBook key={index} book={book} />)
                }
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wish List" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                    listedWishBooks.map((book, index) => <ListBook key={index} book={book} />)
                }
            </div>
        </div>
    );
};

export default ListedBooks;