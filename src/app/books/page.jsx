const BookPage = async () => {
    const res = await fetch('http://localhost:5003/books', {
        cache: 'no-store'
    });

    const books = await res.json();

    return (
        <div className="container mx-auto">
            <h1 className='text-3xl text-center font-sans font-mono font-extrabold my-10 font-bold'>Book Page</h1>
            <div>
                {books.map(book => (
                    <div key={book.id}>
                        <h1>{book.title}</h1>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookPage;