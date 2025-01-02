import React from 'react';
import banner from '../../assets/images/banner.png';
const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row px-10 justify-around items-center h-full lg:h-[90vh] bg-[url("https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")] bg-cover bg-center]'>
            <div>
                <h2 className='text-5xl font-bold text-warning'>Books to freshen up </h2>
                <h2 className='text-5xl font-bold text-success mt-4'>your bookshelf</h2>
                <button className='btn btn-success font-bold text-white mt-12 px-8'>View the list</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;