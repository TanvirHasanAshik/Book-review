import React from 'react';
import { CiStar } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
    const {
        Title, Author, Genre, Review, Tags, Number_of_Pages, Publisher, Year_of_Publishing, Rating, Cover_Image
    } = book;

    const navigate = useNavigate();
    const handleDetailsBook = (title) => {
        navigate(`/details/book/${title}`);
    };

    return (
        <div className="card bg-base-100 w-full xl:w-[400px] border mx-auto">
            <figure onClick={() => handleDetailsBook(Title)} className="bg-slate-100 py-10 m-5 rounded-xl cursor-pointer">
                <img
                    className="card-image h-72 w-52 "
                    src={Cover_Image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex gap-4'>
                    {Tags.map(tag => <span key={tag} className="badge badge-success font-bold text-white p-3">{tag}</span>)}
                </div>
                <h2 className="card-title">{Title}</h2>
                <div className='flex justify-between'>
                    <p className='text-sm font-bold'>By: {Author}</p>
                    <p className='text-sm font-bold flex justify-end items-center gap-1'>{Rating}<CiStar /></p>
                </div>
            </div>
        </div>
    );
};

export default Book;