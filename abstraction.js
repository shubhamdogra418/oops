//Hide complexity, expose only what’s needed
//Hiding complex implementation details and showing only the necessary features of an object. Think of it as a "User Interface" for your code.
//When you call emailService.send(), you don't care about SMTP protocols or socket connections. You just want the email sent.

class CoffeeMachine {
  // Complex internal logic hidden from the user
  #boilWater() {
    return "Water is boiling...";
  }
  #grindBeans() {
    return "Grinding the beans...";
  }

  //public interface
  makeCoffee() {
    console.log(this.#boilWater());
    console.log(this.#grindBeans());
    return "coffee is ready";
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee();
