const UserDM = require('../database/datamodels/User'),
  crypt = require('../safe');

class User {
  async create({ password, username, email }) {
    //take password and hash it with bcrypt
    let hashpassword = await crypt.generatePasswordHash(password);

    //UPD
    const newUser = new UserDM({
      username: username,
      email: email,
      password: hashpassword
    });

    //Save new user to the data base and return the user object
    await newUser.save()

    return newUser;
  }


  //get
  async getUser(userId) {
    const user = await UserDM.findOne({ _id: userId });
    console.log(user);
    return user;
  }

  //delete
  async delete(userId) {
    return await UserDM.findByIdAndDelete({ _id: userId });
  }

}

module.exports = exports.default = User;