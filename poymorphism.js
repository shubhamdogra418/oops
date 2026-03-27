//Same interface, different behavior
//The ability of different classes to be treated as instances of the same parent class through the same interface. "Poly" (many) "morphism" (forms).

//like pricing strategy which is the main interface but diff classes do diff implementation of the same
//hourlyPricing, surgePricing - we can add multiple pricing types here without changing the other files
//just add in here we are goood to go

class PaymentGateway {
  processPayment() {
    console.log("Processig payment generci way");
  }
}

class Stripe extends PaymentGateway {
  process() {
    console.log("Processing payment with Stripe");
  }
}
class Paypal extends PaymentGateway {
  process() {
    console.log("Processing payment with Paypal");
  }
}

class Upi extends PaymentGateway {
  process() {
    console.log("Pocessing payment wiht UPI");
  }
}

function processPay(paymentMethod) {
  paymentMethod.process();
}
processPay(new Stripe());
processPay(new Upi());

//consider we are recoding user's payments
const payments = [new Stripe(), new Paypal(), new Upi()];
payments.map((payment) => {
  payment.process();
});
