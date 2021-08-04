## Virtual Car Dealership

In SpringBoot Web App, we are going to implement a day at a virtual car dealership.  The dealership has one salesperson and as many cars as you feel like.  Throughout the day, the salesperson has 5 consecutive appointments to show (and hopefully sell) the cars.

### Development setup
1. [Install Docker](https://docs.docker.com/get-docker/)
1. Install `node`
    ```shell script
    brew install node
    ```
1. Install `yarn`
    ```shell script
    npm install --global yarn
    ```
1. Install `java11`
    ```shell script
    brew update
    brew install openjdk@11

1. Run the following  command from the project root directory
   ```shell script
   docker-compose up -d
   ```

## Running the App Locally
### Start backend server
```shell script
./gradlew bootRun
```

### Start frontend development server
For hot reloading of the frontend, run the following command from the `frontend` directory:
```shell script
yarn start
```

## Running Tests
| Tests to Run       | Command(s)           |
| :----------------- |:---------------------|
| Backend | Run `./gradlew test` in the project root directory |
| Frontend | Run `yarn test` in the `frontend` directory |
| Journey | __Headless:__ Run `yarn test` from the `journey` directory. <br>__In browser:__ Run `yarn open` from the `journey` directory  |

# User Stories
1. **Show the Cars**

   When a potential customer visits the site, cars for sale should be displayed on the page.  Show the car's make, model, and price. That should look something like this:
    ```
    Chevy Volt $4000
    Honda Odyssey $10000
    Porsche 911 $20000
    ``` 
   <br/>

1. **A Car Can be Purchased**

   Display a banner above the list of cars asking customers which one they would like to purchase.
   When the customer clicks a car, display on confirmation message.  If a car is purchased, then it should be
   considered no longer part of the dealership's inventory and therefore no longer be displayed on the site.<br/><br/>

1. **The Salesperson Collects Commission**

   The salesperson should receive a 20% commission for every car they sell.<br/><br/>

1. **A Customer Can Opt to Not Purchase**

   When a customer does not confirm the purchase of a car,
   no commission is earned and that the available car inventory does not change.<br/><br/>

1. **The Site Alerts Customers When Out of Cars**

   When a customer visits the site, if there are no cars in the inventory an out-of-stock message should be displayed.  The customer should not see the banner asking which car they would like to purchase.<br/><br/>

1. **The Salesperson should be able to view their commission**

   When the salesperson visits the site, they should be able to see their profile and earned commission.<br/><br/>

### Advanced User Stories

1. **Only Show Cars Priced within a Customer's budget**

   Add a price range drop down list between the banner and list of cars. The price ranges should be $5,000 increments.
   Only show the cars that are priced within the filtered range.<br/><br/>
   ```
   $0 - $5000
   $5000 - $10000
   $10000 - $15000
   $15000 - $20000
    ```
    <br/>

1. **Only Show Cars of a Specific Make**

   Allow the dealership to carry multiple cars of the same make. Add an additional filter that allows the customer to choose
   cars by make. The customer should be able to select multiple makes. Only show the makes selected by the customer.
   The customer should be able to filter by both price range and make

1. **The Salesperson should have to login to view their commission**

   Protect the salesperson profile with a login prompt.<br/><br/>
