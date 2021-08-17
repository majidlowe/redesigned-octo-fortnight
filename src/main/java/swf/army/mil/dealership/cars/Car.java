package swf.army.mil.dealership.cars;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Cars")
public class Car {
    @Id
    private long id;
    private String make;
    private String model;
    private long price;
//    boolean isSold = false;

}
