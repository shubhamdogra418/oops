//Bundling data + methods, and restricting direct access.
//You don't want external services accidentally changing your Database._connectionStatus. You expose only what is necessary.

class BankAccount {
  #balance;
  //there will be initialBalance in account
  //if user deposits then we are toping up the account
  constructor(intialBalance) {
    this.#balance = intialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return `Your balance is ${this.#balance}`;
  }
}

const myAcc = new BankAccount(100);
myAcc.deposit(200);
console.log(myAcc.getBalance());
