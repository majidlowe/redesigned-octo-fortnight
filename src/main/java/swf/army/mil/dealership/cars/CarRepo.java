package swf.army.mil.dealership.cars;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import swf.army.mil.dealership.cars.Car;

@Repository
public interface CarRepo extends CrudRepository<Car, Long> {

//   Iterable<Car>findCarsBySoldIs(boolean soldCar);




}
