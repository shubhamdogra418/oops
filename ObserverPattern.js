//One-to-many dependency
// When one changes → others are notified

//A one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
//Node.js is built on this! The EventEmitter module is a native implementation of the Observer pattern.
// It’s used for logging, handling HTTP requests, and triggering background jobs.

//“Loose coupling between publisher and subscribers.”

const EventEmitter = require("events");

class TicketService extends EventEmitter {
  buy(email, price) {
    console.log(`user info is ${email} ${price}`);
    this.emit("buy", email, price);
  }
}

const ticket = new TicketService();
ticket.on("buy", (email) => {
  console.log(`${email} bought the ticket`);
});

ticket.on("buy", (price) => {
  console.log(`bought the ticket for ${price}`);
});

ticket.buy("uspaosm@gmail.com", 500);
