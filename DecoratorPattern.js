//consider we have pizza shop
//we have base price for simple pizza and price would increase when toppings adds up

class Pizza {
  getCost() {
    return 100;
  }
  getDescription() {
    return "plain pizza";
  }
}

//now we have to add toppings on this pizza we will decorator pattern here
class PizzaDecorator extends Pizza {
  constructor(pizza) {
    super();
    this.pizza = pizza;
  }
  getCost() {
    //cost of which pizza
    return this.pizza.getCost();
  }
  getDescription() {
    return this.pizza.getDescription();
  }
}

//toppings
class ExtraCheese extends PizzaDecorator {
  getCost() {
    return this.pizza.getCost() + 100;
  }
  getDescription() {
    return this.pizza.getDescription() + " + Extra Cheese";
  }
}

//mushroom
class Mushroom extends PizzaDecorator {
  getCost() {
    return this.pizza.getCost() + 200;
  }
  getDescription() {
    return this.pizza.getDescription() + " + Mushroom";
  }
}

//making a new pizza
debugger;
let myOrder = new Pizza();
myOrder = new ExtraCheese(myOrder);
myOrder = new Mushroom(myOrder);

console.log(myOrder.getCost());
console.log(myOrder.getDescription());
