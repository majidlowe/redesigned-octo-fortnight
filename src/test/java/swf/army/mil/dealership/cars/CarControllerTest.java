package swf.army.mil.dealership.cars;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import swf.army.mil.dealership.cars.Car;
import swf.army.mil.dealership.cars.CarService;
import swf.army.mil.dealership.sales.SalesRequest;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class CarControllerTest {

    @Autowired
    MockMvc mvc;
    @Autowired
    @MockBean
    CarService carService;



    @Test
    public void testShowAll() throws Exception {
        Car myCar = new Car(1,"Chevy","Cruze",20000);
        List<Car> carList= new ArrayList<>();
        carList.add(myCar);

        when(carService.getAllCars()).thenReturn(carList);

//        MockHttpServletRequestBuilder getAllCars = get("/cars")
//                .contentType(MediaType.APPLICATION_JSON);
//
//        this.mvc.perform(getAllCars)
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$[0].model", is("Cruze")));
    }
//    @Test
//    public void testPurchaseOfCarById() throws Exception {
//        when(carService.purchaseCar(1)).thenReturn(true);
//
//        SalesRequest salesRequest = new SalesRequest(1, 1);
//
//        String srAsString = new ObjectMapper().writeValueAsString(salesRequest);
//
//        MockHttpServletRequestBuilder performCarPurchase = patch("/cars/1")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(srAsString);
//
//        this.mvc.perform(performCarPurchase).andExpect(status().isOk()).andExpect(content().string("true"));
//
//
//    }

}
