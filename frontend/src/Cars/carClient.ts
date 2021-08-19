import {Car} from "./Car";
import axios from 'axios'


export const getCars = async (): Promise<Car[]> => {
    const response = await axios.get("/cars", {headers: {Accept: 'application/json'}})
    return response.data
}
