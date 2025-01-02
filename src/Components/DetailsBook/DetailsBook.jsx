import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getReadBooks, getWishList, setReadBooks, setWishList } from '../../Utility/localstorage';
import toast, { Toaster } from 'react-hot-toast';

const DetailsBook = () => {
    const books = useLoaderData();
    const { title } = useParams();
    const [detailBook, setDetailsBook] = useState({});

    useEffect(() => {
        const book = books.find((book) => book.Title === title);
        setDetailsBook(book);
    }, [books, title]);


    const handleReadBook = (title) => {
        const getBooks = getReadBooks();
        if (getBooks.includes(title)) {
            toast.error('Already read the book');
        } else {
            setReadBooks(title);
            toast.success('Successfully read the book')
        }
    }

    const handleWishlist = (title) => {
        const getCheckBooks = getReadBooks();
        const getCheckWishList = getWishList();

        if (getCheckBooks.includes(title)) {
            toast.error('Already read the book');
        } else if (getCheckWishList.includes(title)) {
            toast.error('Already added to wishlist');
        } else {
            setWishList(title);
            toast.success('Successfully added to wishlist')
        }

    }
    return (
        <div className='flex flex-col lg:flex-row gap-10 mx-5 my-10 items-center justify-center'>
            <div className='border rounded-lg'>
                <img src={detailBook?.Cover_Image} alt="" />
            </div>
            <div>
                <div className='flex flex-col space-y-2 border-b-2 pb-4'>
                    <h2 className='text-4xl font-semibold'>{detailBook?.Title}</h2>
                    <h5 className='text-xl font-bold border-b-2 pb-2'>By: {detailBook?.Author}</h5>
                    <p className='text-sm font-semibold'><span className='font-bold'>Review:</span> {detailBook?.Review}</p>
                    <div className='flex items-center gap-2 my-4'>
                        <h5 className='text-xl font-bold'>Tags:</h5>
                        {detailBook?.Tags?.map((tag, idx) => <span key={idx} className='bg-gray-200 p-1 m-1 rounded-xl px-4 font-bold'>{tag}</span>)}
                    </div>
                </div>

                <div className='flex gap-20 text-sm my-7'>
                    <div>
                        <h2>Number of Pages:</h2>
                        <h2>Publisher:</h2>
                        <h2>Year of Publishing:</h2>
                        <h2>Rating:</h2>
                    </div>
                    <div className='font-bold'>
                        <h2>{detailBook?.Number_of_Pages}</h2>
                        <h2>{detailBook?.Publisher}</h2>
                        <h2>{detailBook?.Year_of_Publishing}</h2>
                        <h2>{detailBook?.Rating}</h2>
                    </div>
                </div>
                <button onClick={() => handleReadBook(title)}
                    className="btn btn-outline">
                    Read</button>
                <button onClick={() => handleWishlist(title)}
                    className="btn btn-secondary text-white ml-5">
                    Wish list</button>
                <Toaster />
            </div>
        </div>
    );
};

export default DetailsBook;