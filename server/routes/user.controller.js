const UserService = require('./user.service');

// Async Controller function to get the User List

exports.authenticate = async function (req, res, next) {
  console.log(req.body)
  try {
    let user = await UserService.authenticate(req.body.email, req.body.password);
    return res.status(200).json({ status: 200, data: user, message: "Authenticate successfully" });

  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }

};


// exports.getUsers = async function (req, res, next) {

//   let page = req.query.page ? req.query.page : 1;
//   let limit = req.query.limit ? req.query.limit : 10;

//   try {
//     let users = await UserService.getUsers({}, page, limit);
//     return res.status(200).json({ status: 200, data: users, message: "Successfully Users Received" });

//   } catch (e) {
//     return res.status(400).json({ status: 400, message: e.message });
//   }
// };


// exports.getUserById = async function (req, res, next) {

//   if (!req.params.id) {
//     return res.status(400).json({ status: 400, message: "Id must be present" })
//   }

//   let id = req.params.id;

//   let user = {
//     id,
//     username: req.body.username || null,
//     email: req.body.email || null,
//   };

//   try {
//     let UserByIdData = await UserService.getUserById(id);
//     return res.status(200).json({ status: 200, data: UserByIdData, message: "Successfully Edit page loaded" })

//   } catch (e) {
//     return res.status(400).json({ status: 400, message: e.message });
//   }

// };

// exports.createUser = async function (req, res, next) {

//   let user = {
//     email: req.body.email,
//     password: req.body.password,
//     username: req.body.username,
//   };

//   try {

//     let createdUser = await UserService.createUser(user);
//     return res.status(201).json({ status: 201, data: createdUser, message: "Successfully Created User" })
//   } catch (e) {

//     return res.status(400).json({ status: 400, message: "User Creation was Unsuccessfully" })
//   }
// };

// exports.updateUserById = async function (req, res, next) {
//   let user = {
//     email: req.body.email,
//     password: req.body.password,
//     username: req.body.username,
//   };

// };

// exports.removeUser = async function (req, res, next) {

//   let id = req.params.id;

//   try {
//     let deleted = await UserService.deleteUser(id);
//     return res.status(204).json({ status: 204, message: "Successy User Deleted" })
//   } catch (e) {
//     return res.status(400).json({ status: 400, message: e.message })
//   }

// };