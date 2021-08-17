CREATE TABLE if not exists CARS(
    id SERIAL PRIMARY KEY,
    make VARCHAR(255),
    model VARCHAR(255),
    price DECIMAL(7,2)
);

INSERT INTO CARS (make, model, price)
VALUES ('Chevy', 'Volt', 4000.00),
       ('Honda', 'Odyssey', 10000.00),
       ('Porsche', '911', 20000.00);