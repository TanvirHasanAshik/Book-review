import React from 'react';
import { CiStar, CiUser } from 'react-icons/ci';
import { RiPagesLine } from 'react-icons/ri';
import { SlCalender } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
const ListBook = ({ book }) => {
    const { Title, Author, Tags, Number_of_Pages, Publisher, Rating, Cover_Image, Year_of_Publishing } = book;
    const navigate = useNavigate();

    return (
        <div className="card card-side bg-base-100 border h-fit lg:h-72 my-10">
            <figure>
                <img className='w-52' src={Cover_Image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <p className='text-sm font-semibold'>By: {Author}</p>
                <div className='flex justify-between'>
                    <span className='font-semibold flex items-center gap-2'>Tag:
                        {
                            Tags.map((tag, idx) =>
                                <p key={idx} className='text-sm bg-slate-200 p-2 rounded-2xl'
                                >#{tag}</p>
                            )
                        }
                    </span>
                    <p className='flex items-center justify-center gap-1 text-sm'>
                        <SlCalender /> Publishing year: <span className='font-semibold'>{Year_of_Publishing}</span>
                    </p>
                </div>
                <div className='flex  items-center gap-2 font-bold border-b-2 pb-4'>
                    <p className='text-sm flex items-center gap-1'><CiUser />Publisher: {Publisher}</p>
                    <p className='text-sm flex items-center gap-1'><CiStar />Rating: {Rating}</p>
                    <p className='text-sm flex items-center gap-1'><RiPagesLine />Pages: {Number_of_Pages}</p>
                </div>
                <div className="card-actions ">
                    <button
                        onClick={() => navigate(`/details/book/${Title}`)}
                        className="btn btn-secondary rounded-md px-10"
                    >Show details</button>
                </div>
            </div>
        </div>
    );
};

export default ListBook;