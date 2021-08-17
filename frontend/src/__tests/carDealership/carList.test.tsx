import {render, screen} from "@testing-library/react";
import {waitForAsyncUpdates} from "../helper/waitForAsyncUpdates";
import React from "react";
import { CarList } from "../../Cars/CarList";
import { Car } from "../../Cars/Car";

const renderCarList = async () => {
    render(<CarList/>);
    await waitForAsyncUpdates();
};
const myCars: Car[] = [
    { carId: 1, carMake: 'Chevy', carModel: 'Volt', carPrice: 4000 },
    { carId: 2, carMake: 'Honda', carModel: 'Odyssey', carPrice: 10000 },
    { carId: 3, carMake:'Porsche', carModel: '911', carPrice: 20000 }
];
describe('car list tests', () => {
    it('should display a car list', async () => {
       await renderCarList()
        expect(screen.getByText("Chevy Volt $4000")).toBeInTheDocument();
        expect(screen.getByText("Honda Odyssey $10000")).toBeInTheDocument();
        expect(screen.getByText("Porsche 911 $20000")).toBeInTheDocument();
    })
})