const bcrypt = require("bcryptjs");
//here use 'npm install bcryptjs' to install bcryptjs package, hashing passwords.
//is good convention to have built-in or third-package import first, and then you own imports after.
const db = require("../data/database");

class User {
  constructor(email, password, fullname, phonenumber, address) {
    this.email = email;
    this.password = password;
    this.name = fullname;
    this.phonenumber = phonenumber;
    this.address = address;
  }

  async signup() {
    const hashedPassword = await bcrypt.hash(this.password, 12);
    //don't forget 'const' !!!
    //in second param, just controls how strong the hashing algorithm is.

    await db.getDb().collection("users").insertOne({
      //here must bean object
      email: this.email,
      password: hashedPassword,
      name: this.name,
    });
  }
}

module.exports = User;
