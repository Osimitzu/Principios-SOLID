/*** Interface Segregation Principle ***/

// class Product {
//   getDetails() {
//     // getDetails implementation
//   }

//   saveToDb() {
//     //saveToDb implementation
//   }

//   displayInFrontend() {
//     //displayInFrontend implementation
//   }
// }

// class DigitalProduct extends Product {
//   // The digital product inherits all methods
// }

// Lo mismo de arriba, pero REFACTORIZADO con Interface Segregation Principle:
class Product {
  getDetails() {
    // getDetails implementation
  }

  displayInFrontend() {
    //displayInFrontend implementation
  }
}

class PhysicalProduct extends Product {
  saveToDb() {
    //saveToDb implementation
  }
}

class DigitalProduct extends Product {
  // Now digital product only has the methods it needs (getDetails and displayInFrontend)
}
