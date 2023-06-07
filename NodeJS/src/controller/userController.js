import userService from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }
  let userData = await userService.handleUserLogin(email, password);

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

let handleGetAllUsers = async (req, res) => {
  let id = req.query.id;

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: `Missing required parameter`,
      users: [],
    });
  }

  let users = await userService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: `ok`,
    users,
  });
};

let handleCreateNewUser = async (req, res) => {
  
  let message = await userService.createNewUser(req.body);
  console.log(message);
  return res.status(200).json(message);
};

let handleUpdateUser = async (req, res) => {
  const data = req.body
  try {
    let mess =  await userService.updateUserData(data)
  console.log(mess);
  return res.status(200).json(mess)
  } catch (error) {
  return res.status(500).json(error) 
  }
}

let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  }
  let message = await userService.deleteUser(req.body.id);
  return res.status(200).json(message);
};

let getAllCode = async (req,res) => {
  try{
    let data = await userService.getAllCodeService(req.query.type);
    console.log(data);
    return res.status(200).json(data);
  }catch(e){
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server'
    })


  }

}




module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleUpdateUser:handleUpdateUser,
  handleDeleteUser: handleDeleteUser,
  getAllCode: getAllCode
};
