CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    published_year YEAR,
    isbn VARCHAR(13) UNIQUE,
    price DECIMAL(10, 2),
    rating DECIMAL(3, 2),
    stock_count INT
);
