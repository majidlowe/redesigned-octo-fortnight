import React, {useState, useEffect} from "react";
import {Car} from '../Cars/Car';
import {getCars} from "./carClient";


export const CarList = () => {

    const [cars, setCars] = useState<Car[]>([]);


    useEffect(() => {
        getCars().then(data => setCars(data))
    }, [])


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

