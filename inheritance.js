//Reuse logic via parent-child relationship
//A mechanism where one class (child) acquires the properties and methods of another (parent).

class User {
  constructor(email) {
    this.email = email;
  }
  login() {
    console.log(`User logged in with email ${this.email}`);
  }
}

class Admin extends User {
  deleteUser() {
    console.log(`Deleteing the user with email ${this.email}`);
  }
}

const admin = new Admin("shubhamdogra418@gmail.com");
admin.login(); //inherited from user
admin.deleteUser(); //unique to admin
