import {screen} from "@testing-library/react";
import React from "react";
import {CarList} from "../../Cars/CarList";
import {Car} from "../../Cars/Car";
import {getCars} from "../../Cars/carClient";
import {renderComponent} from "../helper/utils";


jest.mock('../../Cars/carClient')

const mockGetCars = getCars as jest.MockedFunction<typeof getCars>

const myCars: Car[] = [
    {carId: 1, carMake: 'Chevy', carModel: 'Volt', carPrice: 4000},
    {carId: 2, carMake: 'Honda', carModel: 'Odyssey', carPrice: 10000},
    {carId: 3, carMake: 'Porsche', carModel: '911', carPrice: 20000}
];


describe('car list tests', () => {
    afterEach( ()=>{
        mockGetCars.mockClear();
    })
    it('show list of cars ', async () => {
        mockGetCars.mockResolvedValueOnce(myCars)
        await renderComponent(<CarList/>);
        expect(getCars).toHaveBeenCalledTimes(1)
        expect(screen.getByText("Chevy Volt $4000")).toBeInTheDocument();
        expect(screen.getByText("Honda Odyssey $10000")).toBeInTheDocument();
        expect(screen.getByText("Porsche 911 $20000")).toBeInTheDocument();


    });

});

