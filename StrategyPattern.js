//Switch behavior at runtime
//Payment methods, Sorting logic, Pricing strategies
//This is the ultimate "Open/Closed Principle" pattern. If you have a massive if/else or switch block
// inside a function to decide how to process data, you should probably use Strategy.

//A GPS: You choose "Walking," "Driving," or "Cycling."
// The destination is the same, but the way you get there changes.

//GPS example

//one startegy to make a payment
const paypalStrategy = (amount) =>
  console.log(`payment has been made using paypal of ${amount}`);

const stripeStrategy = (amount) => {
  console.log(`payment has been made using stripe of ${amount}`);
};

class StartegyPattern {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }
  process(amount) {
    return this.paymentStrategy(amount);
  }
}
//lets pay an amount using startegy pattern
const payment = new StartegyPattern(stripeStrategy);
payment.process(200);

//“Removes if-else chains and makes code extensible.”
