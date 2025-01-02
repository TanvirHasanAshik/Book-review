const getReadBooks = () => {
    return JSON.parse(localStorage.getItem('readBooks')) || [];
};
const getWishList = () => {
    return JSON.parse(localStorage.getItem('wishList')) || [];
};

const setReadBooks = (readBooks) => {
    const getBooks = getReadBooks();
    const wishList = getWishList();
    const removeWishList = wishList.filter(list => list !== readBooks);
    localStorage.setItem('wishList', JSON.stringify(removeWishList));

    const setBooks = getBooks.find(book => book === readBooks);
    if (!setBooks) {
        getBooks.push(readBooks);
        localStorage.setItem('readBooks', JSON.stringify(getBooks));
    }
};

const setWishList = (wishListBook) => {
    const wishList = getWishList();
    const getBooks = getReadBooks();
    const setBooks = getBooks.find(book => book === wishListBook);
    if (!setBooks && wishList.includes(wishListBook) === false) {
        wishList.push(wishListBook);
        localStorage.setItem('wishList', JSON.stringify(wishList));
    };
};

export { getReadBooks, setReadBooks, getWishList, setWishList };