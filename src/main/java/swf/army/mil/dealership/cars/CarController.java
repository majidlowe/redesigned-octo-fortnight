package swf.army.mil.dealership.cars;

import org.springframework.web.bind.annotation.*;
import swf.army.mil.dealership.sales.SalesRequest;

@RestController
@RequestMapping("/cars")
public class CarController {
    CarService carService;

    public CarController (CarService carService) {
        this.carService = carService;
    }

    @GetMapping("")
    public Iterable<Car> listOfCars(){
        return carService.getAllCars();
    }

//    @PatchMapping("/{id}")
//    public boolean purchaseCarById(@RequestBody SalesRequest salesRequest, @PathVariable long id){
//        return carService.purchaseCar(id);
//    }

}
