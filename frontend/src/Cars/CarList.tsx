import React, {useState, useEffect} from "react";
import {Car} from '../Cars/Car';


export const CarList = () => {
    const [cars, setCars] = useState<Car[]>([]);

    const loadCars = () => {
        // getCars().then((data) => setCars(data)); // carService
        setCars([
            {carId: 1, carMake: 'Chevy', carModel: 'Volt', carPrice: 4000},
            {carId: 2, carMake: 'Honda', carModel: 'Odyssey', carPrice: 10000},
            {carId: 3, carMake: 'Porsche', carModel: '911', carPrice: 20000}
        ])
    };

    useEffect(loadCars, []);

    return (
        <main>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>
                        {car.carMake} {car.carModel} ${car.carPrice}
                    </li>
                ))}
            </ul>
        </main>
    );
}

