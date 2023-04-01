class Vehicle {
  constructor(make, model, year) {
    if (new.target === Vehicle) {
      throw new TypeError("Cannot construct Vehicle instances directly");
    }
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    throw new Error("Method 'start()' must be implemented.");
  }

  stop() {
    throw new Error("Method 'stop()' must be implemented.");
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }

  start() {
    console.log("Starting the car...");
  }

  stop() {
    console.log("Stopping the car...");
  }
}

const car = new Car("Toyota", "Camry", 2020);
car.start(); 
car.stop(); 
