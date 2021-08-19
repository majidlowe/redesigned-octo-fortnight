import {Car} from "../../Cars/Car";
import nock from 'nock';
import {getCars} from "../../Cars/carClient";

const myCars: Car[] = [
    {carId: 1, carMake: 'Chevy', carModel: 'Volt', carPrice: 4000},
    {carId: 2, carMake: 'Honda', carModel: 'Odyssey', carPrice: 10000},
    {carId: 3, carMake: 'Porsche', carModel: '911', carPrice: 20000}
];


describe('car client test ', () => {
    it('get list of cars from Backend ', async () => {
        nock('http://localhost').get('/cars').reply(200, myCars);
        const cars = await getCars()
        expect(myCars).toEqual(cars)


    });

});