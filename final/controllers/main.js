const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
  const { username, password } = req.body;
  //mongoose validation
  //Joi package
  //check in controller

  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  res.send('Fake Login/Register/SignUp Route');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data : ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
