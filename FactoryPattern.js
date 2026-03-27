//A way to create objects without specifying the exact class of the object that will be created.
//When your application needs to handle different types of the same thing (e.g., different
// payment gateways or different notification types) without hardcoding logic everywhere.

class Email {
  send(user, msg) {
    console.log(`${msg} has been successfully sent to ${user}`);
  }
}

class Push {
  send(user, msg) {
    console.log(`${msg} has been successfully sent to ${user}`);
  }
}

class NoitificationFactory {
  static resgitry = {
    email: Email,
    push: Push,
  };

  static create(type) {
    const SelectedClass = this.resgitry[type];
    if (!SelectedClass) {
      throw new Error("invalid selected class");
    }
    return new SelectedClass();
  }

  //   static create(type) {
  //     switch (type) {
  //       case "email":
  //         return new Email();
  //       case "push":
  //         return new Push();
  //       default:
  //         return "invalid type";
  //     }
  //   }
}

const notifier = NoitificationFactory.create("email");
notifier.send("nodejs", "hello lld");
